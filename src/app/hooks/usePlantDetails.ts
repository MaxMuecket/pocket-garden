import { Plant } from '../../types';
import useFetch from './useFetch';

function usePlantDetails(
  name: string
): {
  plant: Plant | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const { data: plant, isLoading, errorMessage } = useFetch<Plant>(
    `/api/plants/${name}`
  );

  console.log(plant);
  return { plant, isLoading, errorMessage };
}

export default usePlantDetails;
