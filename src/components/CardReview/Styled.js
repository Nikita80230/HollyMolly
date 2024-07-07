import { styled } from "styled-components";

export const StyledContainer = styled.li`
border-radius: 10px;
padding: 25px 20px;
width: 410px;
height: 242px;
display:flex;
flex-direction:column;
justify-content:space-between;

.wrapperNameStars{
    margin-bottom:10px;
    display:flex;
    justify-content:space-between;
}
.name{
    
font-weight: 600;
font-size: 30px;

}

.review{
    margin-bottom:36px;
font-weight: 400;
font-size: 30px;

}

.dateCreated{
font-weight: 400;
font-size: 24px;
line-height: 1.20833;
margin-left:250px;

}

`