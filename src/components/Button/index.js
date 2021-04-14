import styled from 'styled-components';

export const Button = styled.button`
  color: #FFF;
  font-size: 14px;
  font-weight: 500;

  padding: 9px 16px;
  background: #304FFE;
  border-radius: 6px;
  border: 1px solid #304FFE;
  cursor: pointer;

  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.14s linear;
  &:hover {
    transform: scale(1.1)
  }
`;
