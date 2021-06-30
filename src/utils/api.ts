import { CloudinaryImage, Plant } from '../types';

export async function postPlant(plant: Plant): Promise<Plant> {
  const response = await fetch('/api/plants', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plant),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: Plant = await response.json();
  return result;
}

export async function uploadPlantImage(
  imageFile: File
): Promise<CloudinaryImage> {
  const formData = new FormData();
  formData.append('file', imageFile);
  formData.append(
    'upload_preset',
    `${process.env.VITE_CLOUDINARY_PRESET_NAME}`
  );

  const cloudinaryResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`,
    {
      method: 'post',
      body: formData,
    }
  );
  const cloudinaryResult = await cloudinaryResponse.json();
  return cloudinaryResult;
}
