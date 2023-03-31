import { Task } from "@/type/task.types";

export interface TaskListCardProps {
    tasks: Task[];
    status: 'ToDo' | 'inProgress' | 'Done';
}
