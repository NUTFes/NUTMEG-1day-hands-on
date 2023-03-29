import { useState } from "react";
import { TaskListCardProps } from "./TaskListCard.types";
import { Card, TaskCard, TaskAddModal, Button } from "@components/common";
import { BiAddToQueue } from "react-icons/bi";

export const TaskListCard: React.FC<TaskListCardProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <TaskAddModal status={props.status} onClose={() => setIsModalOpen(false)} />
      )}
      <Card>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{status}</h1>
          <Button onClick={() => setIsModalOpen(true)}>
            <BiAddToQueue className="w-full h-full" />
          </Button>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          {props.tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </Card>
    </>
  );
};

export default TaskListCard;
