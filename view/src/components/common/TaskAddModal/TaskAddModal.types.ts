import { Task } from '@type/task.types';

export interface TaskAddModalProps {
    onClose: () => void;
    status: 'todo' | 'doing' | 'done';
}

export type SubmitTaskData = Omit<Task, 'id' | 'status' | 'createdAt' | 'updatedAt'>;
