import styled from 'styled-components';

export const Form = styled.form`
  
  width:100%;
  display:flex;
  flex-wrap: wrap;
  
  .FormPost {
    display:flex;
    flex-wrap: wrap;
    width:50%; 
  }

  .PreviewPost{
    width:50%;
  }

  .Footer{
    height:67px;
    width:100%;
    margin-top:60px;
    background: #FFFFFF;
  }

  @media (max-width: 768px){
    .FormPost{
      display:block;;
      width:100%;
    }
    .Footer{  
      margin-top:10px;
    }
  }

`;

export const CardHeader = styled.div`
    height:33px;
    border-bottom: 1px solid #ccc;
    align-items:center;

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
`;

export const Network = styled.div`

  height: 110px;
  width:315px;
  border: 1px solid #E0E0E0;
  border-radius:4px;
  background: #FFFFFF;
  margin-left:40px;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    margin-top:17px;
  }

  
 ul{
      display:flex;
      flex-wrap: wrap;
      justify-content:center;
        li{
          margin-left:15px;
          margin-top: 22px;
          margin-bottom: 22px;
          height:33px;
          width:33px;
          border-radius: 50%;
          border: 1px solid #9E9E9E;
          box-sizing: border-box;
          cursor: pointer;
         
              img{
                height:16px;
                width:16px;
                margin-top:8px;
                margin-left:8px;
              }
        } 

        .insta{
          background: linear-gradient(187.5deg, #EF2EA2 5.81%, #E0A22B 109.34%);
        }
        .linke{
          background: #2E92EF;
        }

        .selected{
          background: #DDDDDD;
          border: 1px solid #34CB79;  
        }

  }
`;

export const Calendar = styled.div`

  height: 110px;
  width:315px;
  border: 1px solid #E0E0E0;
  border-radius:4px;
  background: #FFFFFF;
  margin-left:40px;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top:15px;
  }

  .CardContainer{

    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    margin-top: 12px;

    .date{
      height: 42px;
      width:124px;
      border: 1px solid #949494;
    }

    .time{
      height: 42px;
      width:124px;
      border: 1px solid #949494;
    }
  }
 
`;

export const DescriptionPost = styled.div`

  height: 214px;
  width:671px;
  background: #FFFFFF;
  margin-left: 40px;
  margin-top: 40px;
  border: 1px solid #E0E0E0;
  border-radius:4px;


    textarea{
      width:640px;
      height:146px;
      margin-top:20px;
      margin-left:15px;
      border: 1px solid #949494;
      box-sizing: border-box;
      border-radius: 4px;
      resize: none;
      font-family: Poppins;


      
      ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: black;
        padding-top:11px;
        padding-left: 18px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #4F4F4F;
       }



    }

    



  @media (max-width: 768px) {
    width:315px;
    height:172px;
    margin-top:15px;
  }

`;

export const File = styled.div`
  
  height: 239px;
  width:671px;
  background: #FFFFFF;
  margin-left: 40px;
  margin-top: 40px;
  border: 1px solid #E0E0E0;
  border-radius:4px;

  @media (max-width: 768px) {
    width:315px;
    height:147px;
    margin-top:15px;
  }
 
`;

export const ViewPost = styled.div`
  
  height: 643px;
  width:649px;
  background: #FFFFFF;
  margin-left: 40px;
  margin-top: 50px;
  border: 1px solid #E0E0E0;
  border-radius:4px;

  @media (max-width: 768px) {
      display:none;
  }

  .TextWait{
    height:66px;
    width: 380px;
    margin-top:66px;
    margin-left: 135px;
    display:flex;
    justify-content:center;

      span{
        color: #828282;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
      }
   }

   .PostPreview{

    display:flex;
    justify-content:center;
     svg{
      height: 369px;
      width: 303px;
     }

   }
`;

export const ViewPostMobile = styled.div`
  
   button{
    width:315px;
    height: 35px;
    border: 1px solid #E0812C;
    box-sizing: border-box;
    border-radius: 4px;
    margin-left: 40px;
    margin-top: 10px;
    background: #F2994A;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
  }


  @media (min-width: 768px) {
    button{
      display:none;
    }  
  }

`;

export const ContainerFooter = styled.div`
  
  display:flex;

  @media (min-width: 769px){

    justify-content:flex-end; 

    .cancel{
      width:90px;
      height:27px;
      border-radius:4px;
      margin-right:16px;
      margin-top:21px;
      display:flex;
      align-items: center;
      justify-content: center;

      a{
        text-decoration: none;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #2F80ED;
       
      }
  }

  .save{
    width:184px;
    height:45px;
    border-radius:4px;
    margin-right:16px;
    border: 1px solid #2F80ED;
    box-sizing: border-box;
    margin-top:11px;
    display:flex;
    align-items: center;
    justify-content: center;

    a{

      color: #2F80ED;
      text-decoration: none;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }

    .mobile{
      display:none;
    }
  }

  .schedule{
    width:184px;
    height:45px;
    border-radius:4px;
    background: #2F80ED;
    margin-right:52px;
    background: #2F80ED;
    border-radius: 4px;
    margin-top:11px;
    display:flex;
    align-items: center;
    justify-content: center;

    a{
      text-decoration: none;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #FFFFFF;
    }
  }


  }


  
 
  @media (max-width: 768px){

    margin-bottom:96px;

    .cancel{
      width: 62px;
      height: 16px;
      margin-left: 36px;
      margin-top:25px;

      a{
        text-decoration: none;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #2F80ED;
      }
    }

    .save {
      width: 109px;
      height: 27px;
      margin-left:20px;
      margin-top:20px;
      border: 1px solid #2F80ED;
      text-align:center;
      box-sizing: border-box;
      border-radius: 4px;
      
      a{
        text-decoration: none;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        color: #2F80ED;
      }

      .desktop{
        display:none;
       }
     
    }

    .schedule{
      width: 109px;
      height: 27px;
      margin-left:21px;
      margin-top:20px;
      border: 1px solid #2F80ED;
      text-align:center;
      box-sizing: border-box;
      border-radius: 4px;
      background: #2F80ED;
      
      a{
        text-decoration: none;
        color: #FFFFFF;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
      }

    }
  }
`;







