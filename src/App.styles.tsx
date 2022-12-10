import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    borderbox: box-sizing;
    padding: 0;
    margin: 0;
    background-color: #24282F;
    min-height: 100vh;
    color: #fff;
`;

export const Map = styled.div`
    width: 480px;
    height: 480px;
    background-image: url('/assets/map.png');
    background-position: left top;
    background-size: 100%;
`;