import { NewPlant } from '../../types';
import useFetch from './useFetch';

function usePlants(): {
  plants: NewPlant[] | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const { data: plants, isLoading, errorMessage } = useFetch<NewPlant[]>(
    `/api/plants/`
  );

  return { plants, isLoading, errorMessage };
}

export default usePlants;
