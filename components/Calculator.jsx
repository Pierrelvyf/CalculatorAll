import React, { useReducer } from "react";
import styled from "styled-components";
import Bouton from "../styles/Bouton";

const initialState = { input: "", result: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_INPUT":
      return { ...state, input: state.input + action.payload };
    case "CLEAR_INPUT":
      return { ...state, input: "" };
    case "CALCULATE":
      try {
        const result = eval(state.input.replace("x", "*"));
        return { ...state, result };
      } catch {
        return { ...state, result: "Erreur" };
      }
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const CalculatorAll = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (value) => {
    dispatch({ type: "ADD_INPUT", payload: value });
  };

  const handleOperation = (operator) => {
    if (state.input) {
      dispatch({ type: "ADD_INPUT", payload: operator });
    }
  };

  return (
    <Wrapper>
      <Display>
        {state.result !== null ? state.result : state.input || "0"}
      </Display>
      <Grid>
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((num) => (
          <Bouton key={num} onClick={() => handleInput(num)}>
            {num}
          </Bouton>
        ))}
        {["+", "-", "x"].map((op) => (
          <Bouton key={op} onClick={() => handleOperation(op)}>
            {op}
          </Bouton>
        ))}
        <Bouton onClick={() => dispatch({ type: "CALCULATE" })}>=</Bouton>
        <Bouton onClick={() => dispatch({ type: "RESET" })}>Reset</Bouton>
      </Grid>
    </Wrapper>
  );
};

export default CalculatorAll;

const Wrapper = styled.div`
  width: 300px;
  margin: 50px auto;
  background: #1e1e2f;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Display = styled.div`
  background:rgb(255, 255, 255);
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1.5rem;
  text-align: right;
  min-height: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;