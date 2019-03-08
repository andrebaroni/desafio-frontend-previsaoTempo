import React, { Component } from 'react'
import Table from '../../components/Table/index'
import { Icon } from 'antd';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment'
import './index.css'
import 'moment/locale/pt-br'
import color from '@material-ui/core/colors/indigo';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class ShowData extends Component {

    render() {
        const { informacoes, capitalInfo, loading} = this.props

        const tempMin = informacoes.map((inf, index) => {
            const item = informacoes[index]
            const temperatureMin = informacoes[index].temperature.min

            return temperatureMin
        })

        const tempMax = informacoes.map((inf, index) => {
            const temperatureMax = informacoes[index].temperature.max
            return temperatureMax
        })

       

        return (

            <div className="content">
                
                <Card>
                    <CardContent>
                        <h2>Capitais</h2>
                        {capitalInfo && <Table capitalInfo={capitalInfo} />}     
                    </CardContent>
                </Card>
                
            </div>
        )
    }

}


export default ShowData