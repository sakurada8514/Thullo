import { unsplash } from "libs/unsplash";

export const fetchRandomImage = async () => {
  const res = await unsplash.photos.getRandom({});
  console.log(res);

  if (res.type === "success" && !Array.isArray(res.response))
    return res.response.urls.regular;
  return "";
};
