import { StyledButton } from "./Styled";

const ButtonAuth = ({title, width}) => {
    return (<StyledButton type="submit"  width={width}>{title}
        
    </StyledButton>)
}

export default ButtonAuth;