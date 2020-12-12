import styled from 'styled-components';

export const Modal = styled.div`

    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color:rgba(0,0,0,0.5);
 
  .modal_overlay{
      background-color: #fff;
      border-radius: 4px;
      width:872px;
      height:419px;
      margin: 80px auto 0 auto;
      padding: 15px;
      display:block;
      justify-content:center;
      text-align:center;

      @media (max-width: 768px) {
            width:350px;
       }
     
      img{
        width:197px;
        height:192px;
      }

      span{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        color: #4F4F4F;
      }

      button{
        width:184px;
        height:45px;
        margin-top:21px;
        background: #2F80ED;
        border-radius: 4px;
        color:white;
      }
    
  }
  
`;