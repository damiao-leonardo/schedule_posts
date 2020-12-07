import styled from 'styled-components';

export const Title = styled.div`

 width:100%;
 height:53px;
 margin-top:106px;

 span{
     padding-left:40px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #4F4F4F;
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