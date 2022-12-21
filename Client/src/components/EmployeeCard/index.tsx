import { ButtonHTMLAttributes } from "react";
import { Container, EditButton, Name, Position, RemoveButton } from "./styles";

import editIcon from '../../assets/images/edit-icon.svg';
import removeIcon from '../../assets/images/trash-icon.svg';

interface EmployeeCardProps{
    name: string,
    position: string,
    handleEdit?: () => void,
    handleRemove?: () => void
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
    name,
    position,
    handleEdit,
    handleRemove
}) => {
    return (
        <Container>
            <Name>{name}</Name>

            <Position>{position}</Position>

            <EditButton onClick={handleEdit}>
                <img src={editIcon} alt="Ícone de lápis" />
            </EditButton>

            <RemoveButton onClick={handleRemove}>
                <img src={removeIcon} alt="Ícone de lixo" />
            </RemoveButton>

        </Container>
    )
};