import { useState, useEffect } from 'react';
import { getTodoPage } from '../api/axios';

// 호출된 API 데이터 상태 처리를 위한 Custom Hook
const useTodos = (pageNum = 1) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    // API 호출 시 요청간에 문제가 발생할 경우 도중 중단 처리를 위해 AbortController 인터페이스 생성
    const controller = new AbortController();
    const { signal } = controller;

    // API 통신 및 중단하는데 사용하기 위해 signal을 getTodoPage 함수의
    // 두 번째 인자로 전달하여 axios option으로 설정
    getTodoPage(pageNum, { signal })
      .then(data => {
        setTodos(prev => [...prev, ...data]);
        setHasMore(Boolean(data.length));
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: e.message });
      });

    return () => controller.abort();
  }, [pageNum]);

  return { todos, isError, error, isLoading, hasMore };
};

export default useTodos;
