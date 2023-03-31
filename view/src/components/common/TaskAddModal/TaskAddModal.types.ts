import { Task } from '@type/task.types';

export interface TaskAddModalProps {
    onClose: () => void;
    status: 'ToDo' | 'inProgress' | 'Done';
}

export type SubmitTaskData = Omit<Task, 'id' | 'status' | 'createdAt' | 'updatedAt'>;
