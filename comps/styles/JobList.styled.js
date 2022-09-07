import styled from "styled-components";

export const StyledJobList = styled.div`
display: flex;
align-items: center;
justify-content: center;
/* text-align: center; */

.job-list-holder{
    /* background-color: gray; */
    width:100%;
    max-width: 824px;
    margin-right: 10px;
    margin-left: 10px;
    /* padding:10px; */
}
h2{
    margin-top:5px;
}
.listing{
    cursor: pointer;
    padding:25px;
    border-radius:20px;
    border: 1px solid #EAEAEA;
    margin-top: 12px;
    margin-bottom: 12px;
    transition:0.3s;
    &:first-child{
        /* margin-top:60px; */
    }
    &:hover{
        border:1px solid #1AAEB7;
        transition:0.3s;
        .arrow{
            transform: translate(5px, -5px);
        }
    }
}
.info-line{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.icons-holder{
    display: flex;
    .single-icon{
        margin-right: 24px;
        display: flex;
        align-items: center;
        /* padding-left: 5px; */
        span{
            margin-left: 3px;
        }
    }
}
.new-tab{
    display:flex;
    align-items: center;
}
.arrow{
    transition: transform ease 300ms;
    margin-left:10px ;
}

`