import { EmployeeCard } from '../../components/EmployeeCard';
import { Container, EmployeeExample, EmployeeSearch, EmployeesList, NewEmployeeButton, NewEmployeeButtonArea, NewEmployeeModal, PageHeader } from './styles';

import { useState, useEffect, useRef, FormEvent } from 'react';
import axios from 'axios';
import { APIURL } from '../../api/api';



interface EmployeesListProps{
    _id: string,
    name: string,
    age: string,
    contract: string,
    wage: string,
    position: string,
    createdAt: string,
    updatedAt: string
};

export const Home = () => {
    const [employeesList, setEmployeesList] = useState<EmployeesListProps[]>();
    const [searchName, setSearchName] = useState('');
    const [openNewModal, setOpenNewModal] = useState(false);
    const [openEditModal, setEditModal] = useState(false);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [contract, setContract] = useState('');
    const [wage, setWage] = useState('');
    const [position, setPosition] = useState('');

    const [editedName, setEditedName] = useState('');
    const [editedAge, setEditedAge] = useState('');
    const [editedContract, setEditedContract] = useState('');
    const [editedWage, setEditedWage] = useState('');
    const [editedPosition, setEditedPosition] = useState('');
    const [id, setId] = useState('');

    function cleanFields(){
        setName('');
        setAge('');
        setContract('');
        setWage('');
        setPosition('');

        setEditedName('');
        setEditedAge('');
        setEditedContract('');
        setEditedWage('');
        setEditedPosition('');
    };


    async function getEmployees(){
        const request = await axios.get(`${APIURL}/list`);
        const response: EmployeesListProps[] = await request.data;

        setEmployeesList(response);
    };

    async function AddNewEmployees(e: FormEvent){
        e.preventDefault();

        try{

            const data = {
                name: name,
                age: age,
                contract: contract,
                wage: wage,
                position: position
            }
    
            await axios.post(`${APIURL}/create`, data);

            setOpenNewModal(false);
        }catch(err){
            window.alert('Error')
        }

        cleanFields();
    };

    async function RemoveEmployees(id: string, name: string){
        try{

            const isConfirmed = confirm('Tem certeza de que quer apagar o usuário ' + name)

            isConfirmed &&  await axios.delete(`${APIURL}/delete/${id}`);

            
        }catch(err){
            window.alert('error')
        }

    };

    function handleOpenEditModal(id: string, name: string, age: string, contract: string, wage: string, position: string){
        setId(id);
        setEditedName(name);
        setEditedAge(age);
        setEditedContract(contract);
        setEditedWage(wage);
        setEditedPosition(position);


        setEditModal(!openEditModal)
    };

    async function EditEmployees(e: FormEvent){
        e.preventDefault();

        const data = {
            name: editedName,
            age: editedAge,
            contract: editedContract,
            wage: editedWage,
            position: editedPosition
        };

        try{
            await axios.put(`${APIURL}/edit/${id}`, data);

        }catch(err){
            window.alert("error")
        }

        cleanFields();
        setEditModal(false);
    };


    useEffect(() => {
        !searchName &&
        getEmployees();
    }, [AddNewEmployees, RemoveEmployees, EditEmployees]);

    useEffect(() => {

        async function filterEmployees(){
            const request = await axios.get(`${APIURL}/list`);
            const response: EmployeesListProps[] = await request.data;

            const result = response.filter(e => {
                return e.name.includes(searchName)
            });

            setEmployeesList(result)
        };

        searchName ? filterEmployees() : getEmployees();


    }, [searchName])


    return (
        <Container>
            {
                openNewModal &&
                <NewEmployeeModal>
                <form onSubmit={AddNewEmployees}>
                    <div className="closemodal">
                        <button onClick={() => setOpenNewModal(false)}>X</button>
                    </div>

                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input 
                        id='name' 
                        type="text" 
                        placeholder='digite o nome do funcionário'
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoComplete="off"
                        />
                    </div>

                    <div>    
                        <label htmlFor="age">Idade:</label>
                        <input 
                        id='age' 
                        type="number" 
                        placeholder='digite a idade do funcionário'
                        required
                        value={age}
                        min={1}
                        onChange={e => setAge(e.target.value)}
                        autoComplete="off"
                        />
                    </div>

                    <div>
                        <label htmlFor="contract">Tipo de contrato:</label>
                        <select value={contract} onChange={e => setContract(e.target.value)} id='contract' required>
                            <option value="PJ">PJ</option>
                            <option value="CLT">CLT</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="wage">Remuneração:</label>
                        <input
                         id='wage' 
                         type="Number" 
                         placeholder='digite a remuneração do funcionário'
                         required
                         min={1}
                         value={wage}
                         onChange={e => setWage(e.target.value)}
                         autoComplete="off"
                         />
                    </div>

                    <div>
                        <label htmlFor="position">Cargo:</label>
                        <input 
                        id='position' 
                        type="text" 
                        placeholder='digite o cargo do funcionário'
                        required
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                        autoComplete="off"
                        />
                    </div>

                    <button type='submit'>
                        Adicionar Novo Funcionário
                    </button>

                </form>

                
                </NewEmployeeModal>
            }

            {
                openEditModal &&

                <NewEmployeeModal>
                <form onSubmit={EditEmployees}>
                    <div className="closemodal">
                        <button onClick={() => setEditModal(false)}>X</button>
                    </div>

                    <div>
                        <label htmlFor="name">Nome corrigido:</label>
                        <input 
                        id='name' 
                        type="text" 
                        placeholder='digite o nome do funcionário'
                        required
                        value={editedName}
                        onChange={e => setEditedName(e.target.value)}
                        autoComplete="off"
                        />
                    </div>

                    <div>    
                        <label htmlFor="age">Idade corrigida:</label>
                        <input 
                        id='age' 
                        type="number" 
                        placeholder='digite a idade do funcionário'
                        required
                        value={editedAge}
                        min={1}
                        onChange={e => setEditedAge(e.target.value)}
                        autoComplete="off"
                        />
                    </div>

                    <div>
                        <label htmlFor="contract">Novo tipo de contrato:</label>
                        <select value={editedContract} onChange={e => setEditedContract(e.target.value)} id='contract' required>
                            <option value="PJ">PJ</option>
                            <option value="CLT">CLT</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="wage">Nova remuneração:</label>
                        <input
                         id='wage' 
                         type="Number" 
                         placeholder='digite a remuneração do funcionário'
                         required
                         min={1}
                         value={editedWage}
                         onChange={e => setEditedWage(e.target.value)}
                         autoComplete="off"
                         />
                    </div>

                    <div>
                        <label htmlFor="position">Novo cargo:</label>
                        <input 
                        id='position' 
                        type="text" 
                        placeholder='digite o cargo do funcionário'
                        required
                        value={editedPosition}
                        onChange={e => setEditedPosition(e.target.value)}
                        autoComplete="off"
                        />
                    </div>

                    <button type='submit'>
                        Editar funcionário
                    </button>

                </form>

                
                </NewEmployeeModal>
            }


            <PageHeader>
                Admin Painel - Employees 
            </PageHeader>

            <NewEmployeeButtonArea>
                <div>
                    <label htmlFor="searc">Buscar: </label>
                    <EmployeeSearch type="text"
                    placeholder='diite o nome de quem deseja procurar'
                    id='searc'
                    value={searchName}
                    onChange={e => setSearchName(e.target.value)}
                    />
                </div>
                <NewEmployeeButton onClick={() => setOpenNewModal(true)}>+</NewEmployeeButton>
            </NewEmployeeButtonArea>
            
            <EmployeesList>
                <EmployeeExample>
                    <span className="name">
                        Funcionário
                    </span>

                    <span className="position">
                        Cargo
                    </span>

                    <span className="actions">
                        Ações
                    </span>
                </EmployeeExample>

                {
                    employeesList?.map(employee => {
                        return <EmployeeCard 
                        key={employee._id}
                        name={employee.name}
                        position={employee.position}
                        handleRemove={ () => RemoveEmployees(employee._id, employee.name)}
                        handleEdit={ () =>  handleOpenEditModal(employee._id, employee.name, employee.age, employee.contract, employee.wage, employee.position) }
                        />
                    })
                }

            </EmployeesList>
        </Container>
    )
};
