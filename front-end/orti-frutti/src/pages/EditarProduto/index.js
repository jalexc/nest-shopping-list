import './styles.css'

import React,{useEffect, useState} from "react";
import api from '../../services/api';
import { useHistory, useLocation } from 'react-router-dom'


import { message,  Input, Button, InputNumber, } from 'antd';


export default function EditarProduto(){    

    const location = useLocation()
    const history = useHistory()

    const [produtoEdit, setProdutoEdit] = useState({})

    useEffect(() => {
       console.log(location.state)
       setProdutoEdit( {...location.state})
    }, [location])


   async function handleSubmit(produtoEdit){
        api.patch(`/item/${produtoEdit.id}`, produtoEdit )
        .then((response) =>{
            if(response.status === 200){
                message.success('Editado com sucesso', 5, true);
                history.push('/produtos')
            }
        })
        .catch((err) => {
            message.warning("Aconteceu um erro inesperado" + err);
        })
    }


    return(
        <div className="produto__container">
            <h1>Editar novo produto</h1>
            <br/>
            <div className='produto__edit'>

                <div className='produto__campo'>
                    <span className='protudo__label'> Nome do produto: </span>
                    <Input value={produtoEdit?.name} onChange={(e) => 
                    { setProdutoEdit((produtoEdit) => {
                        return { ...produtoEdit, name: e.target.value };
                    });
            }} />
                </div>
            
                <div className='produto__campo'>
                    <span className='protudo__label'> Nome do produto: </span>
                    <Input value={produtoEdit?.description} onChange={(e) => 
                    { setProdutoEdit((produtoEdit) => {
                        return { ...produtoEdit, description: e.target.value };
                    });
            }} />
                </div>

                <div className='produto__campo'>
                    <span className='protudo__label'> Nome do produto: </span>
                    <InputNumber value={produtoEdit?.quantity} onChange={(e) => 
                    { setProdutoEdit((produtoEdit) => {
                        return { ...produtoEdit, quantity: e };
                    });
            }}/>
                </div>

                <Button type="primary" className='editar--btn' onClick={() => handleSubmit(produtoEdit)} >editar</Button>
            </div>
            
            
        </div>
    )

}