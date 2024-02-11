import React from 'react';
import { HeartFilled } from '@ant-design/icons';

export default function AddFavourite({onClick}) {
  return (
    <HeartFilled style={{ cursor: 'pointer' }} onClick={onClick}/>
  );
}
