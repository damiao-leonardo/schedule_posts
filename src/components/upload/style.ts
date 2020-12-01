import styled from 'styled-components';

export const Upload = styled.div`

  height: 178px;
  width:639px;
  background: #FFFFFF;
  border: 1px solid #BDBDBD;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  margin-left:15px;

  img {
   height:30px;
   width:45px;
   margin-top: 22px;
  }

  p{
    width:534px;
    height:9px;
    margin-top: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #828282;
  }

  button{
    width:181px;
    height:36px;
    margin-top: 20px;
    background: #FFFFFF;
    border: 1px solid #2F80ED;
    box-sizing: border-box;
    border-radius: 4px;

    span{
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #2F80ED;
    }
  }

`;