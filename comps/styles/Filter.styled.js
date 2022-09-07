import styled from "styled-components";

export const StyledFilter = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding-bottom:60px;
padding-top:100px;
margin-bottom: 60px;
h1{
    margin-top:18px
}
.select-holder{
    select{
        width:300px;
        padding: 14px;
        border-radius:10px ;
        margin-left:12px;
        margin-right:12px;
        font-size: 16px;
        background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #ddd;
        -webkit-appearance: none;
        background-position-x: 270px;
        background-color: white;

        &:first-child{
            margin-left:0;
        }
        &:last-child{
            margin-right:0;
        }

        @media (max-width: 650px) {
        margin-left: 0;
        margin-right: 0;
        margin-top: 10px;
        margin-bottom:10px ;
        }
  }
}
`