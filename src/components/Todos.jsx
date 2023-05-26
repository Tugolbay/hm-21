import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCheckbox, removeTodo } from "../redux/actions";
import { styled } from "styled-components";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducers);
  console.log(todos);
  return (
    <Container>
      {todos.map((todo) => (
        <Block key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(handleCheckbox(todo.id))}
          />
          <p
            style={
              todo.completed === true
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {todo.todo}
          </p>
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </Block>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  margin-left: 550px;
`;

const Block = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 50px;
  margin-top: 20px;
  background-color: rgb(212, 212, 212);
  &:hover {
    background-color: gray;
  }
`;
