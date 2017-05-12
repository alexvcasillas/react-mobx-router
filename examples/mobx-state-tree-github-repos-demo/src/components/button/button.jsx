import styled from 'styled-components';

const Button = styled.button`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  border-radius: ${props => props.radius}px;
  border: 0;
  outline: none;
  color: ${props => (props.color ? props.color : 'white')};
  text-transform: uppercase;
  padding: 10px 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
  transition: all 1s ease-in-out;
  cursor: pointer;
  &:hover{
    background: linear-gradient(45deg, #ed6482 30%, #e98049 90%);
  }
  &:active{
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  }
`;

export default Button;
