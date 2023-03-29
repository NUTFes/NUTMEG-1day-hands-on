export interface Task {
  id: number;
  task_name: string;
  content: string;
  status: 'todo' | 'doing' | 'done';
  user_name: string;
  created_at: string;
  updated_at: string;
}
