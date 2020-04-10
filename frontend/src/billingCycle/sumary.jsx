
import React, { Component } from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

function formatValue(value) {
    const newValue = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    return newValue;
}

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' 
                    value={formatValue(credit)} text='Total de Créditos' />
                <ValueBox cols='12 4' color='red' icon='credit-card' 
                    value={formatValue(debt)} text='Total de Débistos' />
                <ValueBox cols='12 4' color='blue' icon='money' 
                    value={formatValue(credit - debt)} text='Valor Consolidado' />
            </Row>
        </fieldset>
    </Grid>
)