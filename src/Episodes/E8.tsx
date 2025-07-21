import React from 'react'
import AnswerSum from './AnswerSum';

type Props = {}

const E8: React.FC<Props> = (props) => {
    
    const sum = (num1: number, num2: number): number => num1 + num2;
    
  return (
    <div className='fullCenter'>{<AnswerSum sum={sum} />}</div>
  )
}

// مقایسه ارو فانکشن و فانکشن های عادی

export function E8OldFunction(props: Props){

    const sum = (num1: number, num2: number): number => num1 + num2;
    
  return (
    <div className='fullCenter'>{<AnswerSum sum={sum} />}</div>
  )
}

export default E8;