import { Task } from '../../types';
import useFetch from './useFetch';

function useTasks(): {
  tasks: Task[] | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const { data: tasks, isLoading, errorMessage } = useFetch<Task[]>(
    `/api/tasks`
  );

  return { tasks, isLoading, errorMessage };
}

export default useTasks;
