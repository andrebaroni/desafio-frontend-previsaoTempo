import React from 'react'
import { Input } from 'antd';
import "antd/dist/antd.css";


const SearchInput = (({onKeyPress, onChange, placeholder}) => {


    return (
        <div>
            <Input
                placeholder={placeholder}
                onKeyPress={onKeyPress}
                onChange={onChange}
            />
            
        </div>

    )
})

export default SearchInput