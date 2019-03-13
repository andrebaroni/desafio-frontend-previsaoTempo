import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Table from '../../components/Table/index'
import { Icon, Card } from 'antd';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './index.css'
import moment from 'moment'
import 'moment/locale/pt-br'


class DefaultCard extends Component {

    renderWeatherInfo = () => {
        const {informacoes} = this.props
        const velocidadeVento = informacoes[0].wind.velocity_avg
        const umidade = informacoes[0].humidity.max
        const sensation = informacoes[0].thermal_sensation.max
        
        return(
            <div>
                <h5>
                    Vento: {velocidadeVento} Km/h <Icon type="dashboard"/> - 
                    Umidade: {umidade}% <Icon type="cloud"/> - 
                    Sensação: {sensation}°C <Icon type="fire"/>
                </h5>
            </div>
        )
    }

    renderFooter = () => {
        const {informacoes} = this.props
        
         
        moment.locale('pt-br')
        const data = informacoes.map((inf, index) => {
            
            const data1 = informacoes[index].date_br
            return data1
        }).map(date => moment(date, 'DD-MM-YYYY').format('dddd'))

        const tempMin = informacoes.map((inf, index) => {
            const temperatureMin = informacoes[index].temperature.min
            return temperatureMin
        })

        const tempMax = informacoes.map((inf, index) => {
            const temperatureMax = informacoes[index].temperature.max
            return temperatureMax
        })

        return(
            <div className="footer">
                <div className="day-name-container">
                    {data.map(day => (<span className='day'>{day}</span>))}
                </div>
                <div className="day-main-container">
                    {informacoes.map(temp => 
                        <Fragment>
                            <div>
                                 <span> <Icon type="arrow-up" className="iconDown"/>{temp.temperature.min}° - </span>
                                 <span> <Icon type="arrow-up" className="iconUp"/>{temp.temperature.max}° </span>
                            </div>
                        </Fragment>
                    )}
                </div>
            </div>
        )
    }

    render() {
        const { city, informacoes} = this.props
        const text = informacoes[0].text_icon.text.pt
        const title = `${city}, ${text}`
        return (
            <Card title={city}>
                <div className='card-info'>
                    <h3>{text}</h3>
                    {this.renderWeatherInfo()}
                    {this.renderFooter()}                 
                </div>
            </Card>
        )
    }
}

export default DefaultCard