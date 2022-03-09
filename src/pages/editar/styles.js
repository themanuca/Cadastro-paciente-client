import styled from 'styled-components';

export const Container = styled.div`
   
`;

export const Content = styled.div`

>h2{
    font-weight: 600;
    margin-bottom: 1rem;
    position: relative;
    left: -10px;
}


>form {
    color: black;
    display: flex;
    flex-direction: column;
    align-items:center ;
    
   
}
>form label {
        font-weight: 500;
        display:block ;
    
    }


>form label span {
    font-size: 1.1rem;
    margin-top: 2rem;
    display:block ;
}
>form input, select {
    
    background:#E5EAEE ;
    width: 300px;
    height: 40px;
    padding: 0 0.5rem;
    margin-top: 1rem;
    outline: none;
    border-radius: 4px;
    font-size: 0.9rem;
}


>form input[type="submit"]{
    margin-top: 2rem;
    padding: 0.4rem;
    background: linear-gradient(to left, #4776e6, #8e54e9);
    width: 150px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    font-size:0.9rem;
    border-radius: 6px;
    transition: all 0.3s ease;

}

>form input[type="submit"]:hover{
letter-spacing: 0.5px;
background: linear-gradient(to right, #4776e6, #8e54e9);


}

.Logeer{
    
    margin-top: 2rem;
    padding: 0.4rem;
    background: linear-gradient(to left, #4776e6, #8e54e9);
    width: 110px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    font-size:0.9rem;
    border-radius: 6px;
    transition: all 0.3s ease;

}

`;


export const Alermsg = styled.div`
    margin-top:10px ;
    margin-bottom: 30px;
    padding: ${(props)=>props.msgErro}rem;
    color:white;
    font-size: 18px;
    font-weight: 600;
    width: 60vw;
    margin-left:18% ;

    @media(min-width:600px){
        width: 40%;
        margin-bottom: 30px;
        margin-left:30% ;
        

    }
    height: 100%;
    background-color:${(props)=>props.CormsgErro} ;
    /* background-color: #cc1100; */
`;