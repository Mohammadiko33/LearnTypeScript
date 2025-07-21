import React from 'react'

type Props = {sum?: (num1: number , num2: number) => number}

const AnswerSum: React.FC<Props> = ({sum}) => <h1 className='text-6xl'>{sum ? sum(8, 22) : 'No sum function'}</h1>

export default AnswerSum;

    // اگه به کامپوننت یوزر sum ارسال هم نکنیم مشکلی پیش نمیاد چون
    // ما با علامت سوال تعیین کردیم که این پراپ اختیاری یا اپشنال هست