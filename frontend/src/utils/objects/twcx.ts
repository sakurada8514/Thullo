import clsx, { ClassValue } from "clsx";

const colors = [
  "red",
  "gray",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

export const twcx = (...classes: ClassValue[]) => {
  const classlist = clsx(...classes).split(" ");

  const result = classlist.reduce((r, c) => {
    const prefix = c
      .substring(0, c.lastIndexOf("-") + 1 || c.length)
      .replace(new RegExp(`${colors.join("|")}`), "color");
    return { ...r, [prefix]: c };
  }, {});

  return Object.values(result).join(" ");
};
