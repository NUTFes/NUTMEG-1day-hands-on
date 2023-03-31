import { Task } from '@type/task.types';

export interface TaskDeleteModalProps {
    onClose: () => void;
    task: Task;
}

export type SubmitTaskData = Omit<Task, 'id' | 'status' | 'created_at' | 'updated_at'>;
