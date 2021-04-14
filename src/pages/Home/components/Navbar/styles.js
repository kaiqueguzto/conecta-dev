import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  max-width: 300px;
  width:100%;
  margin-right: 20px;
  padding: 20px;

  box-shadow: 2px 2px 2px rgba(0, 0,0,0.3);

`;  

export const ButtonNav = styled.button`
  width: 100%;
  color: #FF7107;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid rgba(255, 113, 7, 0.5);
  padding: 8px 0px;
  border-radius: 4px;
  cursor: pointer;

  transition: border 0.2s;

  &:hover {
    border: 1px solid #FF7107;
  }

`;

export const Content = styled.div`
  padding: 12px 14px;
  
  span {
    color: #546E7A;
    font-weight: 500;
    font-size: 14px;
  }

  ul {
    list-style: none;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.79);
    font-weight: 300
  }

  ul li {
    margin: 16px 0px;
    cursor: pointer;
  }

`;
