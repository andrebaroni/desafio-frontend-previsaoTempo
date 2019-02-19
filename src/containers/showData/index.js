import React, { Component } from 'react'
// import { Card } from 'antd';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './index.css'

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
        const { city, estado, informacoes, country, onKeyPress, onChange, clearState, placeholder } = this.props
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

        const data = informacoes.map((inf, index) => {
            const data1 = informacoes[index].date_br
            return data1
        })


        return (

            <div>
                <input onKeyPress={onKeyPress} onChange={onChange} placeholder={placeholder}></input>
                <button onClick={clearState}>Limpar</button>
                <Card className={classes}>
                    <CardContent>
                        <p>{city}, {estado} - {country}</p>
                        <h2>Hoje: {tempMin[0]}° - {tempMax[0]}°</h2>
                        <p>Min - Max</p>

                        <div className="temp">
                            <Typography>

                                {tempMin.map((inf, index) => {
                                    return (<p>{tempMin[index]}° - </p>)
                                })}
                            </Typography> 

                            <Typography >

                                {tempMax.map((inf, index) => {
                                    return (<p> {tempMax[index]}° -- </p>)
                                })}

                            </Typography>

                            <Typography>

                                {data.map((inf, index) => {
                                    return (<p> {data[index]}</p>)
                                })}

                            </Typography>
                        </div>

                        {console.log("informacoes: ", informacoes)}
                    </CardContent>
                </Card>
            </div>
        )
    }

}


export default ShowData