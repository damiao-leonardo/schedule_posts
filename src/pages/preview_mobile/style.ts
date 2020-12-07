import styled from 'styled-components';

export const CardHeader = styled.section`

    height:33px;
    border: 1px solid #ccc;
    align-items:center;
    background-color:white;
    display:flex;
    justify-content:space-between;

    .title{
      padding-top:4px;
      padding-left:10px;
      span{
        color:#333333;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
    } 

    .close{
        a{
          margin-right:10px;
        }
     }
`;

export const Container = styled.div`
 
  width:317px;
  margin-left:40px;
  margin-bottom: 50px;

`;