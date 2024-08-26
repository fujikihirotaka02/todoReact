import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';

export const Todo = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="ToDoを入力" />
        <button> 追加 </button>
      </div>
      <div className="incomplete-area">
        <p className="title"> 未完了のToDo</p>
        <ul>
          <li>
            <div className="list-row">
              <p className="todo-item">ToDoです</p>
              <button> 完了 </button>
              <button> 削除 </button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <p className="todo-item">ToDoです</p>
              <button> 完了 </button>
              <button> 削除 </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p> 完了済のToDo</p>
        <ul>
          <li>
            <div className="list-row">
              <p className="todo-item">ToDoでした</p>
              <button> 戻す </button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <p className="todo-item">ToDoでした</p>
              <button> 戻す </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
