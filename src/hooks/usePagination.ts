import { useCallback, useState } from 'react';

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePreviousClick = useCallback(
    () => setCurrentPage((page) => (page === 1 ? page : page - 1)),
    []
  );

  const handleNextClickClick = useCallback(
    (pageCount: number) =>
      setCurrentPage((page) => (page === pageCount ? page : page + 1)),
    []
  );

  return {
    currentPage,
    handlePreviousClick,
    handleNextClickClick,
  };
};

export default usePagination;
