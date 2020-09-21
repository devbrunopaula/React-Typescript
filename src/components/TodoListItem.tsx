import React, { FC } from "react";

interface TodoListItemProps {
  todo: {
    id: number;
    name: string;
    description: string;
    isComplete: boolean;
  };
}

const TodoListItem: FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isComplete} />
        {todo.description}
      </label>
    </li>
  );
};

export default TodoListItem;
