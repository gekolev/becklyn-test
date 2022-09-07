import {createGlobalStyle} from "styled-components";

const GlobalStyles= createGlobalStyle`
body {
    font-family: 'Gotham', Helvetica, Arial, sans-serif;
    margin:0px;
}
.bg-c-gray{
    background-color:#FAFAFA;
}
.c-primary{
    color:#1AAEB7;
}
.c-secondary{
    color:#004B44;
}
.c-gray{
    color:#8E8E8E;
}
.w-heavy{
    font-weight:600;
}
.w-bold{
    font-weight:800;
}
.fz-14{
    font-size:14px;
}
.fz-16{
    font-size:16px;
}
.fz-18{
    font-size:18px;
}
.fz-48{
    font-size:48px;
}
.m-left-5{
    margin-left:5px;
}
.m-right-5{
    margin-right:5px;
}
.d-only{
    @media (max-width: 425px) {
    display:none;
  }
}
`

export default GlobalStyles;