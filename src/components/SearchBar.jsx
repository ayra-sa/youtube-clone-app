import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className="w-2/6">
      <div className="bg-transparent border border-neutral-300 text-neutral-300 flex rounded-full w-full items-center">
        <input
          type="text"
          name="search"
          id="search"
          className="px-5 py-2 rounded-full w-full bg-transparent focus:outline-0"
          placeholder="search"
          autoComplete="off"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconContext.Provider value={{ color: 'blue' }}>
          <i className={`pr-4 text-yellow-300 ${searchTerm ? "block" : "hidden"}`} onClick={() => setSearchTerm("")}>
            <GrClose />
          </i>
        </IconContext.Provider>
      </div>
    </form>
  );
};

export default SearchBar;
