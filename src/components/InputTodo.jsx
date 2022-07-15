import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange } = props;
  return (
    <div style={style}>
      {/* <div className="input-area"> */}
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
    </div>
  );
};