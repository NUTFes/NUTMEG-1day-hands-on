import { Task } from '@type/task.types';

export interface TaskEditModalProps {
    onClose: () => void;
    task: Task;
}

export type SubmitTaskData = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>;
