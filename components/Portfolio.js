import styled from "styled-components"
import { BsThreeDotsVertical } from "react-icons/bs"
import { coins } from "../static/coins"

const Portfolio = () => {
    return (
        <Wrapper>
            <PortfolioTable>
                <TableItem>
                    <Title>Your Assets</Title>
                </TableItem>
                <Divider />
                <Table>
                    <TableItem>
                        <TableRow>
                            <p style={{ flex: 3 }}>Name</p>
                            <p style={{ flex: 2 }}>Balance</p>
                            <p style={{ flex: 1 }}>Price</p>
                            <p style={{ flex: 1 }}>Allocation</p>
                            <BsThreeDotsVertical style={{ flex: 0 }} />
                        </TableRow>
                    </TableItem>
                    <Divider />
                    <div>{coins.map((coin) => (
                        <div key={coin.sign}>
                            <h2>{coin.name}</h2>
                            <Divider />
                        </div>
                    ))}</div>
                </Table>
            </PortfolioTable>
        </Wrapper>
    )
}

export default Portfolio

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 2rem 1rem;
`

const PortfolioTable = styled.div`
    margin-top: 1rem;
    border: 1px solid #282b2f;
`

const Table = styled.table`
    width: 100%;
`

const TableRow = styled.tr`
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > th {
        text-align: left;
    }
`

const TableItem = styled.div`
    padding: 1rem 2rem;
`

const Divider = styled.div`
    border-bottom: 1px solid #282b2f;
`

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
`