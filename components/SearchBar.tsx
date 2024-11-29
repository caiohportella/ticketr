"use client";

import { Search } from "lucide-react";
import Form from "next/form";

const SearchBar = () => {
  return (
    <div>
      <Form action={"/search"} className="relative">
        <input
          type="text"
          name="q"
          placeholder="Search for events..."
          className="w-full py-3 px-4 pl-12 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <button
          type="submit"
          className="search-button"
        >
          
        </button>
      </Form>
    </div>
  );
};
export default SearchBar;