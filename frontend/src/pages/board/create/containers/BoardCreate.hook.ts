import { SWR_KEYS } from "config/swr";
import { fetchRandomImage } from "services/unsplash/unsplash.service";
import useSWR from "swr";

export const useBoardCreate = () => {
  const { data: initImage, mutate } = useSWR(
    SWR_KEYS.FATCH_RANDOM_IMAGE,
    fetchRandomImage,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { initImage };
};
