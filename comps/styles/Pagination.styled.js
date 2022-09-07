import styled from "styled-components";

export const StyledPagination = styled.div`
border-top: 1px solid #EAEAEA;
max-width:824px;
width: 100%;
margin: auto;
margin-top: 48px;
margin-bottom:60px ;
.pagination-holder{
    display:flex;
    align-items: center ;
    justify-content: space-between;
    padding-top:20px;
    padding-bottom:20px;
}
.num-holder{
    display: flex;
    .numbs{
        display: flex;
    }
    .page-num{
        width:40px;
        height:40px;
        /* padding:10px ; */
        text-align:center;
        margin-left:5px;
        margin-right:5px;
        /* background-color: orange; */
        border-radius: 50%;
        transition:0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            color:#1AAEB7;
            background-color:#D6F8FB;
            transition:0.3s ;
        }
    }
}
.flex-center{
    display:flex;
    align-items: center;
}
`