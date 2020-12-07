import styled from 'styled-components';

export const Posts = styled.div`
  display:flex;
  overflow-x:scroll;
  overflow-y: hidden;

  @media (max-width: 768px){
    display:block;
    overflow: hidden;
  }
`;

