import styled from "styled-components";


const ErrorContainer = styled.div`
    height:12px;
    color:red;
    font-size:12px;
`


const ErrorMsg = (props) =>{
    return <ErrorContainer>
        {props.children}
    </ErrorContainer>
}

export default ErrorMsg;

