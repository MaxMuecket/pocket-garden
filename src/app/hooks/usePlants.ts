import { Plant } from '../../types';
import useFetch from './useFetch';

function usePlants(): {
  plants: Plant[] | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const { data: plants, isLoading, errorMessage } = useFetch<Plant[]>(
    `/api/plants/`
  );

  return { plants, isLoading, errorMessage };
}

export default usePlants;
