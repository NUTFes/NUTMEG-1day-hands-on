import { useState } from "react";
import { Modal, Button } from "@components/common";
import { TaskAddModalProps, SubmitTaskData } from "./TaskAddModal.types";
import { useRouter } from "next/router";

export const TaskAddModal: React.FC<TaskAddModalProps> = (props) => {
  const router = useRouter();

  const [formData, setFormData] = useState<SubmitTaskData>({
    task_name: "",
    content: "",
    user_name: "",
  });

  const handleFormDataChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (data: SubmitTaskData) => {
    const url = process.env.CSR_API_URI + "/tasks";

    const submitData = {
      task_name: data.task_name,
      content: data.content,
      user_name: data.user_name,
      status: props.status,
    }

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    });

    props.onClose();
    router.reload();
  };

  return (
    <Modal onClose={props.onClose}>
      <h1 className="text-2xl font-bold text-center mb-5">Add Task</h1>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-lg">Task Name</p>
          <input
            type="text"
            name="task_name"
            value={formData.task_name}
            onChange={handleFormDataChange}
            className="w-full border border-background rounded-lg p-2"
          />
        </div>
        <div>
          <p className="text-lg">User Name</p>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
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
      </div>
      <div className="w-fit mx-auto mt-5">
        <Button onClick={() => submit(formData)}>Submit</Button>
      </div>
    </Modal>
  );
};

export default TaskAddModal;
