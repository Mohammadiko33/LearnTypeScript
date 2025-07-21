import React from 'react'

type Props = { name: string; age: number; isMarrey?: boolean }

const User = (props: Props) => {
  return (
        <>
        <h1 className="text-6xl">name : {props.name}</h1>
        <h2 className="text-5xl">age : {props.age}</h2>
        <h3 className="text-4xl">isMarrey : {`${props.isMarrey}`}</h3>
    </>
  )
}

export default User;