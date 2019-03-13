import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CapitalsCard from '../../containers/capitalsCard'
import ShowDataContainer from '../../containers/showData'
import SearchInput from '../../components/SearchInput/index'
import DefaultCard from '../../containers/defaultCard/index'
import ButtonClear from '../../components/ClearButton/index'
import "./index.css"
import weatherService from '../../services/weatherService'

const token = "b3ae75edd3001797d782b3425d35224f"

const ids = [
    7364,
    6879,
    5959,
    // 8173,
    // 7704,
    // 6731,
    // 6809,
    // 5864,
    // 7725,
    // 6861,
    // 5346,
    // 8050
]
class ShowData extends Component {

    state = {
        cityId: "3477",
        city: "",
        estado: "",
        date: "",
        informacoes: [],
        capitals: [],
        today: "",
        tomorrow: "",
        country: "",
        loading: true,
        temErro: false,
    }

    componentDidMount() {
        this.getCapitals()

    }

    getCapitals = async () => {

        await ids.map((city) => {
            fetch(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${city}/days/15?token=${token}`)
                .then(results => results.json())
                .then(res => {
                    const { name, data } = res
                    this.setState({
                        capitals: [...this.state.capitals, {
                            city: name,
                            info: data,
                            tempMin: data[0].temperature.min,
                            tempMax: data[0].temperature.max
                        }]
                    })
                })
        })
    }

    onKeyPress = (e) => {
        const keyCode = e.which || e.keyCode
        if (keyCode === 13) {
            Promise
                .resolve(this.state.city)
                .then(weatherService.getCityId)
                .then(result => weatherService.getStatsFromId(result))
                .then(result2 => {
                    const { name, state, country, data, id } = result2
                    this.setState({
                        city: name,
                        cityId: id,
                        estado: state,
                        informacoes: data,
                        country: country,
                        loading: false,
                    })
                })
                .catch(loading => this.setState({ loading: true }))
        }
    }

    onChange = e => {
        this.setState({
            city: e.target.value
        })
    }

    render() {
        return (
            <div className="display">
                <div className="search">
                    <h2>Previsão do Tempo</h2>
                    <SearchInput
                        placeholder="Digite uma cidade..."
                        onKeyPress={this.onKeyPress}
                        onChange={this.onChange}
                        clearState={this.clearState}
                    />
                </div>
                {!this.state.loading && <DefaultCard
                    informacoes={this.state.informacoes}
                    city={this.state.city}
                />}
                <CapitalsCard
                    capitals={this.state.capitals}
                />

            </div>
        )
    }
}

export default ShowData