import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const [todoText, setTodoText] = useState("");
  const arr = [...Array(100).keys()];
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const history = useHistory();

  const onClickDetailA = () => {
    history.push("/Page1/detailA");
  };

  return (
    <div>
      <h1>Page1ページです</h1>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} />
      <br />
      <Link
        to={{
          pathname: "/Page1/detailA",
          state: arr
        }}
      >
        DetailA
      </Link>
      <br />
      <Link to="/Page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
