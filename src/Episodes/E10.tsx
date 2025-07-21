import React from 'react'
import AnswerSum from './AnswerSum';

type Props = {}

const E10: React.FC<Props> = (props) => {
    
    const sum = (num1: number, num2: number): number => num1 + num2;
    
  return (
    <div className='fullCenterCol'>{<AnswerSum sum={sum} />}</div>
  )
}

export default E10;