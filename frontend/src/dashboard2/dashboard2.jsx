import React, { Component } from 'react' 
import axios from 'axios'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

export default class DashBoard2 extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0}
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {
        const { credit, debt } = this.state        

        function formatValue(value) {
            const newValue = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
            return newValue;
        }  

        return ( 

            <div>
                <ContentHeader title='Dashboard' small='Versão 2.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={formatValue(credit)} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={formatValue(debt)} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={formatValue(credit - debt)} text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}