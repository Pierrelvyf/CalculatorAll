import styled from "styled-components";

const Bouton = styled.button`
  background: #0d6efd;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

export default Bouton;
