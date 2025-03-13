import { useState, useEffect } from "react";

// ==============================|| HOOKS - PAGINATION ||============================== //

export default function usePagination<T>(data: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);
  const [currentData, setCurrentData] = useState<T[]>([]);

  useEffect(() => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    setCurrentData(data.slice(begin, end));
  }, [data, currentPage, itemsPerPage]);

  function next() {
    setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  }

  function prev() {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }

  function jump(page: number) {
    setCurrentPage(() => Math.min(Math.max(1, page), maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}
