import './styles.css'

import React from "react";
import api from '../../services/api';
import { useHistory } from 'react-router-dom'


import { message, Form, Input, Button, InputNumber } from 'antd';


export default function Produtos(){    


    const history = useHistory()


   async function handleSubmit(produto){
        api.post('/item', produto )
        .then((response) =>{
            if(response.status === 201){
                message.success('Produto criado com sucesso', 5, true);
                history.push('/produtos')
            }
        })
        .catch((err) => {
            message.warning("Aconteceu um erro inesperado" + err);
        })
    }

    return(
        <div className="produto__container">
            <h1>Adicionar novo produto</h1>
            <br/>
            <div className="produto__card__container">

        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Insira o nome da fruta' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Descrição"
                name="description"
                rules={[{ required: true, message: 'insira a descrição!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Quantidade"
                name="quantity"
                rules={[{ required: true, message: 'insira a quantidade!' }]}
                
            >
                <InputNumber/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
            </div>

        </div>
    )

}