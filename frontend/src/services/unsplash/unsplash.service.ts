import { unsplash } from "libs/unsplash";

export const fetchRandomImage = async (): Promise<string> => {
  const res = await unsplash.photos.getRandom({});
  if (res.type === "success" && !Array.isArray(res.response))
    return res.response.urls.regular;
  return "";
};
