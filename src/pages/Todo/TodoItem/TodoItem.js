import { forwardRef } from 'react';
import './TodoItem.scss';

const Todo = forwardRef(({ todo }, ref) => {
  const todoBody = (
    <>
      <h2>{todo.title}</h2>
      <p>{todo.completed ? 'completed ✅' : 'incomplete'}</p>
      <p>Todo ID: {todo.id}</p>
    </>
  );

  const content = ref ? (
    <article className={`todo-item${todo.completed ? ' completed' : ''}`} ref={ref}>
      {todoBody}
    </article>
  ) : (
    <article className={`todo-item${todo.completed ? ' completed' : ''}`}>{todoBody}</article>
  );

  return content;
});

export default Todo;
