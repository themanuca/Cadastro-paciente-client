import React,{useState, useEffect} from "react";
import { Container,Content } from './styles';
import Table from 'react-bootstrap/Table';
import api from "../../services/api";
import Button from 'react-bootstrap/Button';



export default function Dash() {

    var rota = process.env.REACT_APP_API_URL;

    const [pacientes, setPacientes] = useState([]); //Recuperando os pacientes
    const[busca, setBusca] = useState([]); // Fazendo a busca
    const[valor, setValor] = useState(); //valores digitados



    useEffect(()=>{
        async function loadPaciente(){
            const res = await api.get(rota + "/list/paciente");
            setPacientes(res.data);
            setBusca(res.data);
        }
        loadPaciente();
    },[])


    const buscaChange = (e)=>{
        setValor(e.target.value);
        if(!e.target.value){
            setBusca(pacientes);
            return        
        }
        let minLetra = e.target.value.toLowerCase();
        const buscafilter = busca.filter((buscar)=>buscar.nome.toLowerCase().includes(minLetra))
        
        setBusca(buscafilter);
    }

    const novoPaciente = ()=>{
        window.location.href="/";
    }
  return (
    
    <Container>
        <Content>
            <h2>Clínica ACME</h2>
           <input type='text' value={valor} placeholder="Busca por nome" onChange={buscaChange}
           />
            <Table responsive>
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>Data de Nascimento</th>
                    <th>CPF</th>
                    <th>Sexo</th>
                    <th>Endereço</th>
                    <th>Status</th>
                    <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {busca.map((item)=>{
                        return(
                        
                        <tr key={item._id} >
                            <td>{item.nome}</td>
                            <td>{new Date((item.nascimento)).toLocaleString('pt-br').substring(0,10)}</td>
                            <td>{item.cpf}</td>
                            <td>{item.sexo}</td>
                            <td>{item.endereco}</td>
                            <td>{item.status}</td>
                            <td><Button variant="primary" href={'/dash/edit/'+item._id}>Editar</Button>{' '}
                            </td>
                        </tr>
                     )
                    })}
                </tbody>
            </Table>

            <Button onClick={novoPaciente} variant="info">Novo Paciente</Button>
        </Content>
    </Container>
  

    );
}

