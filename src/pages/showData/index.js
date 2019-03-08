import React, { Component } from 'react'
import ShowCapitalsContainer from '../../containers/showCapital'
import ShowDataContainer from '../../containers/showData'
import SearchInput from '../../components/SearchInput/index'
import ButtonClear from '../../components/ClearButton/index'
import "./index.css"
import moment from 'moment'

const token = "b3ae75edd3001797d782b3425d35224f"

const ids = [
    7364,
    6879,
    5959,
    8173,
    7704,
    6731,
    6809,
    5864,
    7725,
    6861,
    5346,
    8050
]
class ShowData extends Component {

    state = {
        cityId: "3477",
        city: "",
        estado: "",
        date: "",
        informacoes: [],
        capitais: [],
        today: "",
        tomorrow: "",
        country: "",
        loading: true,
        //colocar wind depois
    }

    onKeyPress = (e) => {
        const keyCode = e.which || e.keyCode
        if (keyCode === 13) {
            Promise
                .resolve(this.state.city)
                .then(this.getCityId)
                .then(this.getStatsFromId)

        }
    }

    getCityId = async (cityStr) => {

        console.log("cityStr ====== ", cityStr)
        await fetch(`http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${cityStr}&token=${token}`)
            .then(results => results.json())
            .then(res => {
                var newId = `${res[0].id}`
                this.setState({
                    cityId: newId
                })
                this.getStatsFromId()
            })
    }

    onChange = e => {
        this.setState({
            city: e.target.value
        })
    }

    getStatsFromId = () => {


        fetch(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${this.state.cityId}/days/15?token=${token}`)
            .then(results => results.json())
            .then(res => {
                const { name, state, country } = res
                const { data } = res
                //console.log("=======", res)

                this.setState({
                    city: name,
                    estado: state,
                    informacoes: data,
                    country: country,
                    loading: false,
                })
                //console.log('aqui===', this.state.informacoes[0].wind)
            })
    }

    clearState = e => {
        console.log('limpou')
        this.setState({
            cityId: "",
            city: "",
            estado: "",
            date: "",
            informacoes: [],
            today: "",
            tomorrow: "",
            country: "",
        })
        console.log(this.state)
    }



    getCapitals = async () => {

        await ids.map((city) => {
            fetch(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${city}/days/15?token=${token}`)
                .then(results => results.json())
                .then(res => {
                    const { name, data } = res
                    console.log("=====cap==", res)
                    this.setState({
                        capitais: [...this.state.capitais, {
                            city: name,
                            info: data,
                            tempMin: data[0].temperature.min,
                            tempMax: data[0].temperature.max
                        }]
                    })
                })
        })

    }


    componentDidMount() {
        //this.getStatsFromId()

        this.getCapitals()
    }

    render() {
        //console.log(this.state.informacoes[0])
        return (
            <div className="display">
                <h2>Previsão do Tempo</h2>
                <div className="search">
                    <SearchInput
                        placeholder="Digite uma cidade..."
                        onKeyPress={this.onKeyPress}
                        onChange={this.onChange}
                        clearState={this.clearState}
                    />
                    {/* <ButtonClear
                    clearState={this.clearState}
                /> */}
                </div>
                {!this.state.loading && <ShowDataContainer
                    onKeyPress={this.onKeyPress}
                    onChange={this.onChange}
                    clearState={this.clearState}
                    city={this.state.city}
                    estado={this.state.estado}
                    informacoes={this.state.informacoes}
                    country={this.state.country}
                    loading={this.state.loading}
                    //capitalName={this.state.capitais.city}
                    capitalInfo={this.state.capitais}

                />}
                {/* <ShowCapitalsContainer/> */}
                
            </div>
        )
    }
}

export default ShowData