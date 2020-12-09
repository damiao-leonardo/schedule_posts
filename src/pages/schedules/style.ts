import styled from 'styled-components';

export const Header = styled.div`

 width:100%;
 height:53px;
 margin-top:106px;
 display:flex;
 justify-content:space-between;

 span{
    padding-left:40px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #4F4F4F;
 }

 div{
    width:200px;
    height: 35px; 
    box-sizing: border-box;
    border-radius: 4px;
    margin-right: 10%;
    background: #F2994A;
    display:flex;
    justify-content:center;
    align-items:center;
      a{
        padding:5px 25px 5px 25px;
        text-decoration: none;
        font-family: Poppins;
        font-size: 14px;
        text-align: center;
        color: #FFFFFF; 
      }
   }

   @media (max-width: 768px) {
      div {
            a{
              font-size: 12px;
            }
      }
  }
`;

export const Container = styled.div` 
 width:1440px;
 margin-left:40px;

 @media (max-width: 768px) {
    width: 315px;
    overflow-x: scroll;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    width: 700px;
    overflow-x: scroll;
  }
`;