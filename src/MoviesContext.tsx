import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const MoviesContext = createContext({} as any);
const MoviesContextProvider: React.FC = (props: any) => {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  //targetUrl
  let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=09028e53c058ded53b6ad39969718c77&language=en-US&page=${page}`;
  const fetchMovies = () => {
    axios({
      method: "GET",
      url: url,
    })
      .then((res) => {
        console.log(res.data);
        setTotalPages(res.data.total_pages);
      })
      .catch((err) => console.log(err));
  };

  //runs every time value of page changes 
  useEffect(() => {
    fetchMovies();
  }, [page]);

  //data and functions to be used in the context
  let value: any = {
    page: page,
    setPage: setPage,
    totalPages: totalPages,
  };
  return (
    <MoviesContext.Provider value={value}>
      {props.children}
    </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;
