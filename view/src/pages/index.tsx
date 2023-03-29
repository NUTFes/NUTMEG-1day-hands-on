import { NextPage } from "next";
import { Card, TaskCard, TaskListCard } from "@components/common";
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
  const todoTasks = useMemo(() => tasks.filter((task) => task.status === "todo"), [tasks]);
  const doingTasks = useMemo(() => tasks.filter((task) => task.status === "doing"), [tasks]);
  const doneTasks = useMemo(() => tasks.filter((task) => task.status === "done"), [tasks]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-5">
      <TaskListCard tasks={todoTasks} status="todo" />
      <TaskListCard tasks={doingTasks} status="doing" />
      <TaskListCard tasks={doneTasks} status="done" />
    </div>
  );
};

export default Home;
