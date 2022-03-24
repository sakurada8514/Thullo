import { memo } from "react";
import { BaseSubmitButton } from "../button/BaseSubmitButton";

export const SearchForm = memo(() => (
  <div className="hidden h-10 w-80 justify-between rounded-lg bg-gray-50 p-1 shadow-md lg:flex">
    <input
      type="text"
      placeholder="Keyword..."
      name="search"
      id="search"
      className="w-full rounded-md border-none bg-gray-50 text-sm font-normal placeholder-gray-400 outline-none focus:outline-none focus:ring-0"
    />
    <BaseSubmitButton classes="h-full px-6 text-sm">Search</BaseSubmitButton>
  </div>
));

SearchForm.displayName = "SearchForm";
