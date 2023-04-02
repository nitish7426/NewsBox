import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${text}`);
    setText("");
  };
  return (
    <form
      className="flex items-center border rounded-full max-w-xs w-full dark:border-neutral-600"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search NEWS..."
        className="py-1.5 px-4 rounded-full outline-none w-full bg-transparent dark:placeholder:text-neutral-400"
        value={text}
        required
        onChange={(e) => setText(e.target.value)}
      />
      <button className="mr-2 text-orange-500" type="submit">
        <BiSearch size={20} />
      </button>
    </form>
  );
};

export default Search;
