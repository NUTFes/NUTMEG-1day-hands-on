import { useState } from "react";
import { Modal, Button } from "@components/common";
import { TaskEditModalProps, SubmitTaskData } from "./TaskEditModal.typs";
import { useRouter } from "next/router";

export const TaskEditModal: React.FC<TaskEditModalProps> = (props) => {
  const router = useRouter();

  const [formData, setFormData] = useState<SubmitTaskData>({
    taskName: props.task.taskName,
    content: props.task.content,
    userName: props.task.userName,
    status: props.task.status,
  });

  const handleFormDataChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (data: SubmitTaskData) => {
    const url = process.env.CSR_API_URI + "/tasks/ " + props.task.id;

    fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    props.onClose();
    router.reload();
  };

  return (
    <Modal onClose={props.onClose}>
      <h1 className="text-2xl font-bold text-center mb-5">Edit Task</h1>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-lg">Task Name</p>
          <input
            type="text"
            name="taskName"
            value={formData.taskName}
            onChange={handleFormDataChange}
            className="w-full border border-background rounded-lg p-2"
          />
        </div>
        <div>
          <p className="text-lg">User Name</p>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleFormDataChange}
            className="w-full border border-background rounded-lg p-2"
          />
        </div>
        <div>
          <p className="text-lg">Content</p>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleFormDataChange}
            className="w-full border border-background rounded-lg p-2"
          />
        </div>
        <div>
          <p className="text-lg">Status</p>
          <select
            name="status"
            value={formData.status}
            onChange={handleFormDataChange}
            className="w-full border border-background rounded-lg p-2"
          >
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>
      <div className="mt-5 w-fit mx-auto">
        <Button onClick={() => submit(formData)}>Edit</Button>
      </div>
    </Modal>
  );
};

export default TaskEditModal;
