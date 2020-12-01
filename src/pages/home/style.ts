import styled from 'styled-components';

export const Container = styled.div`
 
 width:100%;

div {
     display:flex;
     justify-content: center;
     margin-top:30px;    
        img {  
          height:400px;
          width: 380px;
        }
 }

 section{
     display:flex;
     justify-content: center;
     margin-bottom:105px;
     margin-top:40px;

   a {
     height: 45px;
     width:155px;
     background: #F2994A;
     border-radius: 4px;
     text-decoration:none;
     text-align: center;
     padding: 10px;

    span{
        font-family: Poppins, sans-serif;
        font-style: normal;
        font-size: 16px;
        color: #FFFFFF;
      
     }
  }
}

`;