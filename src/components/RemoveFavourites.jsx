import React from 'react'
import {CloseOutlined} from '@ant-design/icons';

export default function RemoveFavourites({onClick}) {
  return (
    <CloseOutlined style={{cursor: 'pointer'}} onClick={onClick}/>
  )
}
