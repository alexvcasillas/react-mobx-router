import styled from 'styled-components';

const Button = styled.button`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  border-radius: 3px;
  border: 0;
  outline: none;
  color: white;
  text-transform: uppercase;
  padding: 10px 15px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .30);
  transition: all 1s ease-in-out;
  margin-bottom: 5px;

  &:hover{
    background: linear-gradient(45deg, #ed6482 30%, #e98049 90%);
  }

  &:active{
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  }
`;

export default Button;
