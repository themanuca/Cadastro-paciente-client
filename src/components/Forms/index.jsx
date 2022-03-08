import React, {useState, useEffect} from "react";
import { Container,Content, Alermsg } from "./styles";
import api from '../../services/api';
//import axios from "axios";
//import { redirect } from "express/lib/response";
//require("dotenv/config");

export default function Forms(){

    var url = "http://localhost:5000";

    const [nome, setNome] = useState('');
    const [data, setdata] = useState('');
    const [cpf, setcpf] = useState('');
    const [sexo, setsexo] = useState('');
    const [endereco, setendereco] = useState('');
    const [status, setstatus] = useState('');

    const[msg, setMsg] = useState();

    async function salvar(e){
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
       
        const res = await api.post( url + '/register/paciente',dados);
       
        console.log(res.data);
            if(res.status === 200){
                console.log("salvo");
                window.location.href ='/dash';

        }else{

                setMsg(res.data.msg)
            }
        

    }
  
  

    return (
        <Container>
           <Alermsg >{msg}</Alermsg>

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
                        <label><span>Endereço</span></label>
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
                
                    <input 
                    type="submit" 
                    value='Registrar' 
                    onClick={salvar}/>

                </form>


            </Content>
        </Container>
    )
}