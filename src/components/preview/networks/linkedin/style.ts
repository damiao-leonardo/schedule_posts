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
    background: #2E92EF;
    border-radius:10px;
         img{
                height:24px;
                width:24px;
                margin-top:8px;
                margin-left:8px;
          }
  }

  .user{
      display:inline-block;
        height: 22px;
        margin-top:13px;
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
 height:387px;
 margin:auto;

 @media (max-width: 768px) {
    width: 315px;
  }
 
 .description{
     height: 50px;
     width:355px;
     margin-left:13px;
     span{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #4F4F4F;
     }
 } 

 img{
     width:100%;
     height:337px;
 }
  
`;

export const Footer = styled.div`
 width:368px;
 height:64px;

 @media (max-width: 768px) {
    width: 315px;
  }

 .card_footer{

    .comment{
        height:28px;

        span{
            margin-left:14px;
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            color: #828282;
        }
    }


    .icons{
     height: 36px;
     border-top: 1px solid #BDBDBD;
     
     img{
         height:16px;
         width:16px;
         margin-left:14px;
         margin-top:11px;
     }
     
  }


     
 }
`;