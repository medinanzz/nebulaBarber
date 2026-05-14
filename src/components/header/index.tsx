import styled from "styled-components";
import { NavBarHeader } from "./nav";
import { useEffect, useState } from "react";

const DivHeader = styled.div`
  padding: 1em;

  & h1 {
    padding-left: 1em;
  }
`;

export const HeaderPage = () => {
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header>
        <DivHeader
          className={`flex w-full fixed top-0 left-0  justify-center flex-col gap-4 items-center z-50 ${blur ? 'backdrop-blur-md bg-[rgb(0,0,0,.3)]' : 'backdrop-blur-[1px] bg-[rgb(0,0,0,.8)]'}`}
        >
          <NavBarHeader />
        </DivHeader>
      </header>
    </>
  );
};
