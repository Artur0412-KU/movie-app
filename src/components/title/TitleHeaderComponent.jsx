import React from 'react'
import { Typography } from 'antd';
const { Title } = Typography;

export default function TitleHeaderComponent(props) {
  return (
    <Title level={2} style={{color: '#fff', margin: 0}}>{props.title}</Title>
  )
}
