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
        const { capitals } = this.props

        return (
            <div className="content">
                <Card>
                    <CardContent>
                        <h2>Capitais</h2>
                        <div>
                            <table>
                                <tr>
                                    <th>Estado</th>
                                    {/* <th></th> */}
                                    <th>Min - Max</th>
                                    {/* <th>Max</th> */}
                                </tr>
                                {capitals.map(city => (
                                    <tr>
                                        <td>{city.city}</td>
                                        {/* <td></td> */}
                                        <td><Icon type="arrow-down" className="iconDown" />{city.tempMin}° - <Icon type="arrow-up" className="iconUp" />{city.tempMax}°</td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}


export default ShowData