import React, {Component} from 'react'
import './index.css'
import {Icon} from 'antd'

class Table extends Component { 
  render(){
    const capitals = this.props.capitals
    return(
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
                <td><Icon type="arrow-down" className="iconDown"/>{city.tempMin}° - <Icon type="arrow-up" className="iconUp"/>{city.tempMax}°</td>
                               
              </tr>
            ))}
              
              
          
          </table>
      </div>
    )
  }
}

export default Table 