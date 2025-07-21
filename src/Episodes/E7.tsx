import React from 'react'
import AnswerSum from './AnswerSum';


type Props = {}

const E7 = (props: Props) => {

    const sum = (num1: number, num2: number): number => num1 + num2;
    
  return (
    <div className='fullCenter'>{<AnswerSum sum={sum} />}</div>
  )
}

export default E7;

// اگر فانکشن ریترن نداشت تایپ اون void است
// اگر ریترن داشت تایپ ریترن رو مشخص میکنیم