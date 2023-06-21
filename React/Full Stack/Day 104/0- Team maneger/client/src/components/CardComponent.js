import { Card } from '@mui/material';
import React from 'react'

function CardComponent(props) {
  return (
    <div>
      <Card variant="outlined"> {props.children} </Card>
    </div>
  )
}

export default CardComponent;