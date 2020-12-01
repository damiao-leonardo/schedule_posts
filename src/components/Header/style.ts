import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    width:100%;
    display: flex;
    justify-content: space-between;
    background: white;


    .sideDrawer{
         height: 18px;
         width: 22px;
         margin-top: 32px;
         margin-left:20px;
    }

    .Logo{
         height: 48px;
         width: 115px;
         margin-top: 16px;
         margin-left: 40px;
    }

    nav {
        display:flex;
        align-items: center;

        img{
          width: 45px;
          height: 45px;
          margin-top: 17px;
          margin-bottom:17px;
        }

        strong{
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 21px;
          color: #000000;
          margin-left: 12px;
          margin-right: 20px;
        }
   }

   @media (max-width: 768px){
    .Logo{
      display:none;
    }
    
    nav {
        
       img{
          margin-right: 18px;
        }

        strong{
          display:none;
        }
   }

   }

   @media (min-width: 769px){
    .sideDrawer{
      display:none;
    }
   }


`;


