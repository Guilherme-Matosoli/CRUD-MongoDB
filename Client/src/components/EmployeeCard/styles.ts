import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "Name Position Actions";
    place-items: center;
    place-content: center;

    width: 100%;
    height: 4rem;

    border-bottom: 1px solid var(--color-primary-hover);
`;

export const Name = styled.span`
    grid-area: Name;
    font-size: 1.5rem;
    font-weight: 300;

    width: 100%;
`;

export const Position = styled.span`
    grid-area: Position;
    font-size: 1.5rem;
    font-weight: 300;

    width: 100%;
`;

export const EditButton = styled.button`
    grid-area: Actions;
    font-size: 1.5rem;

    background-color: inherit;
    border: none;
    cursor: pointer;

    margin-right: 6rem;

    transition: all .3s;
    &:hover{
        transform: scale(1.1);
    }
`;

export const RemoveButton = styled.button`
    grid-area: Actions;
    font-size: 1.5rem;

    background-color: inherit;
    border: none;
    cursor: pointer;

    transition: all .3s;
    &:hover{
        transform: scale(1.1);
    }
`;