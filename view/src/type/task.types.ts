export interface Task {
  id: number;
  taskName: string;
  content: string;
  status: 'ToDo' | 'inProgress' | 'Done';
  userName: string;
  createdAt: string;
  updatedAt: string;
}
