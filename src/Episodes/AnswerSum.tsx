import React from 'react'

type Anything = "mohammad" | false | 2;

type Props = {sum: (num1: number , num2: number , anything: Anything) => number}

const AnswerSum: React.FC<Props> = ({sum}) => <h1 className='text-6xl'>{sum(8, 22 , 2)}</h1>

export default AnswerSum;

