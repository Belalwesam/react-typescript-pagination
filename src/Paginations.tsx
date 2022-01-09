import React from "react";
import { Pagination } from "react-bootstrap";
interface IProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}
const Paginations: React.FC<IProps> = ({ page, setPage, totalPages }) => {
  const adjustPage = (amount: number) => {
    setPage((page: any) => {
      return page + amount;
    });
  };
  return (
    <Pagination>
      {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
      {page !== 1 && (
        <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
      )}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && (
        <Pagination.Item onClick={() => adjustPage(-1)}>
          {" "}
          {page - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{page}</Pagination.Item>
      {page < totalPages && (
        <Pagination.Item onClick={() => adjustPage(1)}>
          {page + 1}
        </Pagination.Item>
      )}
      {page < totalPages && <Pagination.Next onClick={() => adjustPage(1)} />}
    </Pagination>
  );
};

export default Paginations;
