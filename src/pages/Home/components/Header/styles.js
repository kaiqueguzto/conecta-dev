import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 100%;

  background: #FFF;
  padding: 8px 42px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  .logo {
    height: 55px;
    width: 244px;
    cursor: pointer;
  }

  .toolbar {
    display: flex;
    align-items: center;
  }

  .toolbar svg {
    cursor: pointer;
  }


  .toolbar .notification {
    margin-right: 30px;
  }
  .toolbar button {
    margin-right: 50px;
  }
`;