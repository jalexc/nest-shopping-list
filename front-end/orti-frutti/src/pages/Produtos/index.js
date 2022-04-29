import React, { useEffect, useState } from "react";
import api from '../../services/api';
import { useHistory } from 'react-router-dom'


import './styles.css'

import { Button, Card, Row, Col } from 'antd';

export default function Produtos(){
    const [ produtos, setProdutos] = useState([])
    const history = useHistory()


    useEffect(() => {
        api.get('/item')
        .then((response) =>{
        setProdutos(response.data)
        })
        .catch((err) => {
            console.log("Aconteceu um erro inesperado" + err)
        })
    }, [])


    return(

        <div className="produto__container">
            <h1>Relação de todos os Produtos</h1>

            <div className="produto__card__container">
                {produtos.map(produto => (
                   
                    <Card key={produto.id} title={produto.name}  bordered={false} style={{width: 300}}>
                        <p>
                            Descrição: {produto.description}
                        </p>
                        <p>
                            Quantidade: { produto.quantity}
                        </p>
                        <div>
                            <Button onClick={() => history.push(`/detalhes/${produto.id}`)}>
                                Detalhes
                            </Button>
                        </div>
                    </Card>
                 
                ))}

            </div>

        </div>
    )

}