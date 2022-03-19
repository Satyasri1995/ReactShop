
import styled from "styled-components";


const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const Welcome = (props) => {

  return (
    <WelcomeMessage>
      <h1>Welcome to ReactShop</h1>
    </WelcomeMessage>
  );
};

export default Welcome;
