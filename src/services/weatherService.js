//WEATHER_TOKEN = "b3ae75edd3001797d782b3425d35224f"

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

const getCityId = async (cityStr) => {

    let result = {}

    console.log("cityStr ====== ", cityStr)
    await fetch(`http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${cityStr}&token=${token}`)
        .then(results => results.json())
        .then(results => {
            result = results
        })
        .catch(temErro => console.log("erro: ", temErro))
    console.log("result: ", result)
    return result
}

const getStatsFromId = async (result) => {

    //const { resultado } = this.state
    const cityId = result[0].id

    let result2 = {}

    await fetch(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${cityId}/days/15?token=${token}`)
        .then(results => results.json())
        .then(results => {
            result2 = results
        })

    console.log("results 2: ", result2)
    return result2
}

// const getCapitals = async() => {

//     let capitals = []
//     await ids.map((city) => {
//         fetch(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${city}/days/15?token=${token}`)
//             .then(results => results.json())
//             .then(results => capitals = [...capitals, {results}])
//     })
//     //ta passando undefined
//     return capitals
// }

const weatherService = {
    getCityId,
    getStatsFromId,
    // getCapitals,
}

export default weatherService