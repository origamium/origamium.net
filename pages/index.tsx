import React from "react";
import styled from "styled-components";

const Styled = {
    Root: styled.main`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        & > h1 {
            text-align: center;
        }
    `
};

const Index: React.FC<{}> = () => {
    return (
        <Styled.Root>
            <h1>はい</h1>
        </Styled.Root>
    );
};

export default Index;
