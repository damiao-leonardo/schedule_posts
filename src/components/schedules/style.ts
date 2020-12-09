import styled from 'styled-components';

export const ScheduleList = styled.div`

table{
    margin-right: 46px;
    border: 1px solid #BDBDBD;
    Width: 1354px;

    @media (min-width: 769px) and (max-width: 992px) {
       width: 700px;
    }
}

table thead th{
    background: #FFFFFF;
    color: #4F4F4F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height:65px;
}

table tbody tr{
    height:70px;
    background: #F2F2F2;
    text-align:center;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #4F4F4F;
}

table tbody .icons{

    display:flex;
    flex-wrap: wrap;
    justify-content:center;
      .Instagram{
        height:33px;
        width:33px;
        border-radius:12px;
        margin-left:15px;
        margin-top:18px;
        border:1px solid black;
        background: #D60F86;
        border: 1px solid #D60F86;
        box-sizing: border-box;

        .icon{
             height:16px;
             width:16px;
             margin-top:8px;
             background:#D60F86;
             border: 1px solid #D60F86;
             box-sizing: border-box;
         }
      }

      .Linkedin{  

        height:33px;
        width:33px;
        background: #3A70DA;
        border: 1px solid #3A70DA;
        box-sizing: border-box;
        border-radius:12px;
        margin-left:15px;
        margin-top:18px;

         .icon{
            height:16px;
            width:16px;
            margin-top:8px;
            background: #3A70DA;
            border: 1px solid #3A70DA;
            box-sizing: border-box;
         }
      }
}

table tbody .media img{
        height: 50px;
        width:50px;
}

table tbody .status .icon{
   height: 12px;
   width:12px;
   border-radius: 50%;
} 

table tbody .status span{
    margin-left: 6px;
}

`;