import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: var(--color-background);
`;

export const NewEmployeeModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.19);

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        gap: .5rem;

        padding: 2rem;
        width: 50rem;
        min-height: 40rem;
        border-radius: 1.5rem;

        .closemodal{
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding: 1rem;

            width: 100%;

            button{
                display: flex;
                align-items: center;
                justify-content: center;

                width: 3rem;
                height: 3rem;
            }
        }

        div{
            display: flex;
            flex-direction: column;

            width: 100%;
        }

        div label{
            font-size: 1.5rem;
        }

        div input,
        div select{
            width: 100%;
            height: 4rem;

            padding: 1rem;
            font-size: 1.5rem;

            border: none;
            outline: none;

            background-color: #E9E9E9;
            border-radius: 1rem;
        }

        button{
            background-color: var(--color-primary);
            color: white;
            border: none;
            border-radius: 1rem;

            padding: 1.5rem;
            width: 100%;

            font-size: 1.5rem;

            cursor: pointer;
            transition: background-color .4s;
            &:hover{
                background-color: var(--color-primary-hover);
            }
        }
    }
`;

export const PageHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 7rem;
    padding: 1rem;

    background-color: var(--color-primary);
    color: white;
    font-size: 3rem;
`;

export const NewEmployeeButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-top: 2rem;
    padding: 0 2rem;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;

        width: 50%;
        margin-left: 5%;
    }
`;

export const EmployeeSearch = styled.input`
    width: 100%;
    height: 4rem;

    padding: 1rem;
    font-size: 1.5rem;

    border: none;
    outline: none;

    background-color: white;
    border-radius: 1rem;
`;

export const NewEmployeeButton = styled.button`
    width: 5rem;
    height: 5rem;

    border-radius: 50%;
    border: none;
    background-color: var(--color-primary);

    font-size: 3rem;
    font-weight: 300;
    color: white;

    cursor: pointer;
    transition: all .3s;
    &:hover{
        background-color: var(--color-primary-hover);
        transform: scale(1.1);
    }
`;

export const EmployeesList = styled.main`
    width: 90%;
    height: auto;
    max-height: calc(100% - 5rem - 4rem - 7rem);
    overflow-y: auto;

    margin-top: 2rem;
    margin: auto;
    padding: 0 1rem;

    box-shadow: 0px 5px 3px 1px rgba(0,0,0,0.75);
    background-color: white;

    @media(max-width: 850px){
        width: 100%;
    } 
`;

export const EmployeeExample = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "Name Position Actions";
    place-items: center;
    place-content: center;

    width: 100%;
    height: 5rem;

    border-bottom: 1.5px solid var(--color-primary-hover);
    padding: 1rem;

    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    
    .name{
        grid-area: Name;

        width: 100%;
    }

    .position{
        grid-area: Position;
        width: 100%;
    }

    .actions{
        grid-area: Actions;
    }
`;