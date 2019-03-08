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
        const { city, estado, informacoes, country, capitalInfo, loading} = this.props
        const { classes } = this.props

        const tempMin = informacoes.map((inf, index) => {
            const item = informacoes[index]
            const temperatureMin = informacoes[index].temperature.min

            return temperatureMin
        })

        const tempMax = informacoes.map((inf, index) => {
            const temperatureMax = informacoes[index].temperature.max
            return temperatureMax
        })

        moment.locale('pt-br')
        const data = informacoes.map((inf, index) => {
            
            const data1 = informacoes[index].date_br
            return data1
        }).map(date => moment(date, 'DD-MM-YYYY').format('dddd'))

        

        const velocidadeVento = informacoes[0].wind.velocity_avg
        const umidade = informacoes[0].humidity.max
        const sensation = informacoes[0].thermal_sensation.max
        const text = informacoes[0].text_icon.text.pt

        return (

            <div className="content">
                <Card className={classes}>
                    <CardContent>
                        <p>{city}, {estado} - {country}</p>
                        {/* <div className='mainInfo'> */}
                            <h2><Icon type="arrow-down" className="iconDown"/>{tempMin[0]}° - <Icon type="arrow-up" className="iconUp"/>{tempMax[0]}°</h2>
                            <h3>{text}</h3>
                            {/* </div> */}
                            {/* <div> */}
                            <h5>Vento: {velocidadeVento} Km/h <Icon type="dashboard" /></h5>
                            <h5>Umidade: {umidade}% <Icon type="cloud" /></h5>
                            <h5>Sensação: {sensation}°C <Icon type="fire" /></h5>
                        {/* </div> */}
                        <table className="temp">
                        <tr>
                            <tr>
                                <th>Min</th>
                                <th>Max</th>
                                <th>Dia</th>
                            </tr>

                            
                                <td>
                                    
                                    {tempMin.map((inf, index) => {
                                        return (<tr><Icon type="arrow-down" className="iconDown"/>{tempMin[index]}°</tr>)
                                    })}
                                </td>

                                <td >

                                    {tempMax.map((inf, index) => {
                                        return (<tr> <Icon type="arrow-up" className="iconUp"/>{tempMax[index]}°</tr>)
                                    })}

                                </td>

                                <td>

                                    {data.map((inf, index) => {
                                        return (<tr> {data[index]}</tr>)
                                    })}

                                </td>
                            </tr>
                        </table>

                    </CardContent>

                </Card>
                {/* {loading &&                      */}
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