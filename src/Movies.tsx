import React from "react";
import Paginations from "./Paginations";
import { useContext } from "react";
import { MoviesContext } from "./MoviesContext";
const Movies = () => {
  const { page, setPage , totalPages } = useContext(MoviesContext);
  return (
    <div>
      <Paginations page={page} setPage={setPage} totalPages = {totalPages}/>
    </div>
  );
};

export default Movies;
