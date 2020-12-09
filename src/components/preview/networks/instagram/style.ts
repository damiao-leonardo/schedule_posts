import styled from 'styled-components';

export const Card = styled.div`
 width:368px;
 height:535px;
 margin-top:35px;
 margin-left:23px;
 border: 1px solid #BDBDBD;
 box-sizing: border-box;
 border-radius: 4px;
 background-color:white;

 @media (max-width: 768px) {
    width: 315px;
    margin-left:0px;
  }

`;

export const Header = styled.div`
  width:368px;
  height:82px; 
  display:flex;

  @media (max-width: 768px) {
    width: 315px;
  }

  .logo{
    height:40px;
    width:40px;
    margin-top:14px;
    margin-left:15px;
    background: linear-gradient(187.5deg, #EF2EA2 5.81%, #E0A22B 109.34%);
    border-radius:10px;
       img{
                height:24px;
                width:24px;
                margin-top:8px;
                margin-left:8px;
        }
  }

  .user{
        height: 22px;
        margin-top:23px;
        margin-left: 12px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        color: #000000;
    
   }
`;

export const Container = styled.div`
 width:365px;
 margin:auto;
 height:368px;
 img{
     width:100%;
     height:100%;
 }

 @media (max-width: 768px) {
    width: 315px;
  }
`;

export const Footer = styled.div`
 width:368px;
 height:85px; 

 @media (max-width: 768px) {
    width: 315px;
  }

 .icons{
     height: 35px;
     display:flex;
     justify-content:space-between;
     
     .first{
        .heart{
            margin-top:9px;
            margin-left: 16px;
        }
        .comment{
            margin-top:9px;
            margin-left: 18px;
        }
     }

     .secund
         .share{
             margin-right:16px;
             margin-top: 9px;
         }
     }
     
 }

 .description{
     height: 50px;
     span{
         margin-left:13px;
        color: #4F4F4F;
     }     
 }

`;