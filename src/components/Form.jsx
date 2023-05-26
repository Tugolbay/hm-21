import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addTodo } from "../redux/actions";
import { Todos } from "./Todos";

export const Form = () => {
  const [todoValue, setTodoValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let todoObj = {
      id: Date.now(),
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Label>Grocery list</Label>
          <div>
            <Input
              type="text"
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
              placeholder="add new product..."
            />
            <Button>ADD</Button>
          </div>
        </form>
      </Container>
      <Todos />
    </>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;
const Label = styled.label`
  font-size: 25px;
  margin-left: 700px;
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
  margin-top: 50px;
  margin-left: 520px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: none;
`;

const Button = styled.button`
  width: 60px;
  height: 54px;
  background-color: #5e50db;
  border: none;
  color: #fff;
  &:hover {
    background-color: #3420ef;
  }
`;

const Buttons = styled.button`
  width: 400px;
  height: 50px;
  background-color: red;
  border-radius: 10px;
  border: none;
  color: #fff;
  margin-top: 50px;
  margin-left: 550px;
`;
