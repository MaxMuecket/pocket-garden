import { Task } from '../../types';
import useFetch from './useFetch';

function useTaskDetails(
  title: string
): {
  task: Task | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const { data: task, isLoading, errorMessage } = useFetch<Task>(
    `/api/tasks/${title}`
  );
  return { task, isLoading, errorMessage };
}

export default useTaskDetails;
