import React, {useState, useEffect} from "react";
import { Container,Content, Alermsg } from "./styles";
import api from '../../services/api';
import { useParams } from "react-router-dom";

export default function Forms(){

    var url = "http://localhost:5000";

    const [nome, setNome] = useState('');
    const [data, setdata] = useState('');
    const [cpf, setcpf] = useState('');
    const [sexo, setsexo] = useState('');
    const [endereco, setendereco] = useState('');
    const [status, setstatus] = useState('');

    const[msg, setMsg] = useState();
    const[corBgmsg, setCordbgmsg] = useState();
    const {id} = useParams()



    async function salvar(e){
         e.preventDefault();
        const dados = {
            nome:nome, 
            cpf:cpf, 
            sexo:sexo, 
            nascimento:data,
            endereco:endereco,
            status:status,
            _id:id
        } 

        console.log(dados);
       
        const res = await api.put( url + '/update/paciente/',dados);
       
        console.log(res.data);
            if(res.status === 200){
                
                await setCordbgmsg('#008000');
                setMsg(res.data.msg);
                setTimeout(() =>window.location.href ='/dash'
                , 3000)

        }else{
            await setCordbgmsg('#cc1100');

                setMsg(res.data.msg)
            }
        

    }
  
    var padding = 0;
    useEffect(()=>{
        var padding = 1;
        async function Dadospaciente(){
            var res = await api.get(url +'/detail/paciente/'+id);
            console.log(res.data);
            setNome(res.data.nome);
            setdata(res.data.nascimento);
            setcpf(res.data.cpf);
            setendereco(res.data.endereco);
            setsexo(res.data.sexo);
            setstatus(res.data.status);
        }

        Dadospaciente()

    },[msg])

  

    return (
        <Container>
           <Alermsg CormsgErro={corBgmsg} msgErro={padding}>{msg}</Alermsg>

            <Content>

                <h2>Atualização de Pacientes</h2>

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