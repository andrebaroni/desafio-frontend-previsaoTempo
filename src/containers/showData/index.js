import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

        return (
                // {/* {loading &&                      */}
                // {/* <Card>
                //     <CardContent>
                //         <h2>Capitais</h2>
                //         {capitalInfo && <Table capitalInfo={capitalInfo} />}     
                //     </CardContent>
            //     </Card> */}
                
            // </div>
            <div></div>
        )
    }

}

// ShowData.PropTypes = {
//     capitalList: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string,
//             tempMax: PropTypes.number,
//             tempMin: PropTypes.number,
//             info: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     data: PropTypes.string,

//                 })
//             )
//         })
//     ).isRequired,
//     onChange: PropTypes.func.isRequired,
// }


export default ShowData