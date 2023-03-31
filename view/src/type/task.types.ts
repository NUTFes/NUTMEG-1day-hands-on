export interface Task {
  id: number;
  taskName: string;
  content: string;
  status: 'todo' | 'doing' | 'done';
  userName: string;
  createdAt: string;
  updatedAt: string;
}
