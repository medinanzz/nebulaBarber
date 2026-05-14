import styled from "styled-components";
import { Section1 } from "../section1";
import { Section2 } from "../section2";
import { Schedule } from "../schedule";
import { Courteous } from "../Gallery";
const Main = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100dvh;
`;

export const Home = () => {
    return (
        <>
            <Main>
                <Section1 />
                <Section2 />
                <Courteous />
                <Schedule />
            </Main>
        </>
    )
}