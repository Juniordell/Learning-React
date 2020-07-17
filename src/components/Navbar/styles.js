import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 20vh;
  background: gray;

  > ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      list-style: none;

      > li {
        font-size: 18px;
        
        > span {
            text-decoration: none;
            color: white;
        }
      }
    }
`;
