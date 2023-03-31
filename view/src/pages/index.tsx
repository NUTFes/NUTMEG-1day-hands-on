import { NextPage } from "next";
import { TaskListCard } from "@components/common";
import { Task } from "@type/task.types";
import { useMemo } from "react";

interface Props {
  tasks: Task[];
}

export const getServerSideProps = async () => {
  const tasksUrl = process.env.SSR_API_URI + "/tasks";
  const tasks = await fetch(tasksUrl).then((res) => res.json());

  return {
    props: {
      tasks,
    },
  };
};

export const Home: NextPage<Props> = ({ tasks }) => {
  const todoTasks = useMemo(() => tasks.filter((task) => task.status === "ToDo"), [tasks]);
  const inProgressTasks = useMemo(() => tasks.filter((task) => task.status === "inProgress"), [tasks]);
  const doneTasks = useMemo(() => tasks.filter((task) => task.status === "Done"), [tasks]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-5">
      <TaskListCard tasks={todoTasks} status="ToDo" />
      <TaskListCard tasks={inProgressTasks} status="inProgress" />
      <TaskListCard tasks={doneTasks} status="Done" />
    </div>
  );
};

export default Home;
