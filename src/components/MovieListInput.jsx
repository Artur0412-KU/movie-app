import React from 'react'
import { Input,Typography } from 'antd';
const { Search } = Input;
const { Title } = Typography;

const onSearch = (value, _e, info) => console.log(info?.source, value);

export default function MovieListInput(props) {
  return (
    <div>
     <Search
       placeholder={props.placeholder}
       onSearch={onSearch}
       onChange={(e) => props.setSearchValue(e.target.value)}
       style={{
         width: 200,
         display: 'flex',
         alignItems: 'center'
       }}
     />   
    </div>
    

  )
}
