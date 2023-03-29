import { useState } from "react";
import { TaskCardProps } from "./TaskCard.types";
import {
  Card,
  Button,
  TaskEditModal,
  TaskDeleteModal,
} from "@components/common";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export const TaskCard: React.FC<TaskCardProps> = (props) => {
  const { task } = props;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      {isEditModalOpen && (
        <TaskEditModal task={task} onClose={() => setIsEditModalOpen(false)} />
      )}
      {isDeleteModalOpen && (
        <TaskDeleteModal
          task={task}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
      <Card>
        <div className="mb-3 flex justify-between">
          <div>
            <h1 className="text-xl font-bold">{task.task_name}</h1>
            <p>
              <span className="font-bold">User : </span>
              {task.user_name}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setIsEditModalOpen(true)}>
              <AiOutlineEdit className="w-full h-full" />
            </Button>
            <Button onClick={() => setIsDeleteModalOpen(true)}>
              <AiOutlineDelete className="w-full h-full" />
            </Button>
          </div>
        </div>
        <hr className="border-background border" />
        <div className="my-3">
          <p>{task.content}</p>
        </div>
      </Card>
    </>
  );
};

export default TaskCard;
