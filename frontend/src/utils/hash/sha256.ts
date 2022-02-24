/* eslint-disable new-cap */
import jsSHA from "jssha";

export const sha256 = (str: string): string => {
  const sha = new jsSHA("SHA-256", "TEXT");
  sha.update(str);
  return sha.getHash("HEX");
};
