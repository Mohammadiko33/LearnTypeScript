import React from 'react'

type Props = {sum: (num1: number , num2: number , anything: any) => number}

const AnswerSum: React.FC<Props> = ({sum}) => <h1 className='text-6xl'>{sum(8, 22 , true)}</h1>

export default AnswerSum;

// any : انی یعنی هر چیزی چه بولین چه استرینگ چه نامبر فرقی نداره براش
// any : This is a placeholder for any type of data that can be passed to the function.
// In this case, it is used to demonstrate that the function can accept any additional parameter beyond the two numbers.
// The function sum takes two numbers and an additional parameter, which is not used in the calculation
