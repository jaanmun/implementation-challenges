import { useState, useRef, useCallback } from 'react';
import useTodos from '../../hooks/useTodos';
import TodoItem from './TodoItem/TodoItem';
import './Todo.scss';
import Loader from '../../components/ui/Loader/Loader';
import Layout from './../../layout/Layout';

const Todo = () => {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, isError, error, todos, hasMore } = useTodos(pageNum);

  // 관찰 대상 설정을 위해 useRef 사용
  const intObserver = useRef();
  const lastTodoRef = useCallback(
    todo => {
      if (isLoading) return;

      // 새로운 IntersectionObserver를 생성하기 전
      // 이미 관찰중인 요소가 있다면
      // disconnect() 메서드를 호출하여 모든 요소의 관찰을 중지
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver(todos => {
        if (todos[0].isIntersecting && hasMore) {
          setPageNum(prev => prev + 1);
        }
      });

      if (todo) intObserver.current.observe(todo);
    },
    [isLoading, hasMore]
  );

  if (isError) return <p className="center">Error: {error.message}</p>;

  const content = todos.map((todo, i) => {
    if (todos.length === i + 1) {
      return <TodoItem ref={lastTodoRef} key={todo.id} todo={todo} />;
    }
    return <TodoItem key={todo.id} todo={todo} />;
  });

  const goToTop = () => window.scrollTo(0, 0);

  return (
    <Layout>
      <div id="todo-container">
        <h1>Todo List - Infinite Scrolling</h1>
        {content}
        {isLoading && <Loader />}
        <p className="pixed-button" onClick={() => goToTop()}>
          ⬆
        </p>
      </div>
    </Layout>
  );
};

export default Todo;
