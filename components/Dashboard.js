import Main from "./Main"
import styled from "styled-components"
import Header from "./Header"

const Dashboard = ({ address }) => {
    return (
        <Wrapper>
            <MainContainer>
                <Header />
                <Main />
            </MainContainer>
        </Wrapper>
    )
}

export default Dashboard

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #0a0b0d;
    color: white;
`

const MainContainer = styled.div`
    flex: 1;
`