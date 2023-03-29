import { useState } from "react";
import { Modal, Button } from "@components/common";
import { TaskDeleteModalProps, SubmitTaskData } from "./TaskDeleteModal.types";
import { useRouter } from "next/router";

export const TaskDeleteModal: React.FC<TaskDeleteModalProps> = (props) => {
  const router = useRouter();

  const submit = () => {
    const url = process.env.CSR_API_URI + "/tasks/" + props.task.id;

    console.log(url)

    fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    props.onClose();
    router.reload();
  };

  return (
    <Modal onClose={props.onClose}>
      <h1 className="text-2xl font-bold text-center mb-5">Delete Task</h1>
      <p className="text-center mb-5">タスクを削除しますか?</p>
      <div className="mt-5 w-fit mx-auto">
        <Button onClick={() => submit()}>Delete</Button>
      </div>
    </Modal>
  );
};

export default TaskDeleteModal;
