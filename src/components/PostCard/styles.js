import styled from 'styled-components';

export const PostContainer = styled.div`
  background: #FFF;
  box-shadow: 0px 1px 2px rgba(0, 0,0,0.6);
  margin-bottom: 20px;

  .post-image {
    margin-top: 14px;
    width: 100%;
    height: 320px;
  }

`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  .post-avatar {
    width: 50px;
    border-radius: 100%;
  }
  div {
      margin-left: 20px;

  }
  div h2 {
    font-size: 14px;
  }

  div p {
    color: #546e7a;
    margin-top: 5px;  
    font-size: 13px;
    font-weight: 500;
  }

  div p span {
    font-size:14px;
    font-weight: 500;
    color: #546e7a;
  }
`;


export const PostIcons = styled.div`
  padding: 20px;
  display: flex;

  div {
    display: flex;
    align-items: center;
    color: #848484;
    margin-right: 20px;
    cursor: pointer;
  }

  
`;