import { Button } from 'antd';
import React from 'react'
import "antd/dist/antd.css";


const ButtonClear = ({clearState}) => {

    return (

        <Button type="primary"
            onClick={clearState}
        >
            Limpar
        </Button>
    )
}

export default ButtonClear