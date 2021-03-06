import React, {useState, useEffect} from "react";
import { Container,Content, Alermsg } from "./styles";
import api from '../../services/api';
import Button from 'react-bootstrap/Button';
import Spinner from "react-bootstrap/Spinner";
import ClipLoader from "react-spinners/ClipLoader";


export default function Forms(){

    var rota = process.env.REACT_APP_API_URL;

    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [data, setdata] = useState('');
    const [cpf, setcpf] = useState('');
    const [sexo, setsexo] = useState('');
    const [endereco, setendereco] = useState('');
    const [status, setstatus] = useState('');

    const[msg, setMsg] = useState();
    const[corBgmsg, setCordbgmsg] = useState(false);
    let [color, setColor] = useState("#000");

  
    async function salvar(e){
        setLoading(true)

         e.preventDefault();
        const dados = {
            nome:nome, 
            cpf:cpf, 
            sexo:sexo, 
            nascimento:data,
            endereco:endereco,
            status:status
        } 

        console.log(dados);
       
        const res = await api.post( rota + '/register/paciente',dados);
        
        console.log(res.data);
            if(res.status === 200){
                setTimeout(()=> setLoading(false),2000
                )
               
                await setCordbgmsg('#008000');
                
                setMsg(res.data.msg);
                setTimeout(() =>window.location.href ='/dash'
                , 3000)

        }else{
            await setCordbgmsg('#cc1100');
            setTimeout(()=> setLoading(false),2000
            )
                setMsg(res.data.msg)
            }
        

    }
  
    var padding = 0;

    useEffect(()=>{
        var padding = 1;

    },[msg])

    
    const novoPaciente = ()=>{
        window.location.href="/dash";
    }
  

    return (
        <Container>
           <Alermsg CormsgErro={corBgmsg} msgErro={padding}>{msg}</Alermsg>

            <Content>
                   

                <h2>Cadastro de Pacientes</h2>

                <form >
                    <div className="field-1">
                        <label><span>Nome</span></label>
                        <input 
                        type="text" 
                        name='fistname' 
                        value={nome} 
                        onChange={e=>setNome(e.target.value)} required/>
                    
                    </div>

                    <div className="field">
                        <label><span>Data de Nascimento</span></label>
                        <input 
                        type="date"
                        name='data'
                        value={data}
                        onChange={e=>setdata(e.target.value)} 
                        required
                        

                        />
                    </div>

                    <div className="field">
                        <label><span>CPF</span></label>
                        <input 
                        pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                        type="number" 
                        name='cpf'
                        value={cpf}
                        onChange={e=>setcpf(e.target.value)}required

                        />
                    </div>

                    
                    <div className="field">
                        <label><span>Sexo</span></label>
                        <select id="sexo" name="sexo" value={sexo} onChange={e=>setsexo(e.target.value)} required>

                            <option  value="default">Selecione</option>
                            <option value="Masculino ">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            
                        </select>
                    </div>

           

                    <div className="field">
                        <label><span>Endere??o</span></label>
                        <input 
                        type="locale" 
                        name='localte'
                        value={endereco}
                        onChange={e=>setendereco(e.target.value)}
                        required
                        autoComplete="current-password"

                        />
                    </div>


                    <div className="field">
                        <label><span>Status</span></label>

                        <select id="status" name="status" value={status} onChange={e=>setstatus(e.target.value)} required>
                            <option  value="default">Selecione</option>
                            <option  value="Ativo">Ativo</option>
                            <option value="Inativo">Inativo</option>
                            
                        </select>

                    </div>
                
                    {
                        loading &&
                        <div className="spinner">
                            <ClipLoader  color={color} loading={loading}  size={250} />
                        </div>
                        

                    }
                    <input 
                    type="submit" 
                    value='Registrar' 
                    onClick={salvar}/>

                </form>
                
                <Button onClick={novoPaciente} variant="info">Lista de Usuario</Button>

            </Content>
        </Container>
    )
}