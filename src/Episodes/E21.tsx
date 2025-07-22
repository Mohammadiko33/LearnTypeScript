import React from 'react'

type User1 = {
  id: number | string,
  name: string,
  age: number,
  country: string,
  city: string
}

type User2 = Omit<User1 , "country">

const userinfo : User2 = {
 id: 1,
 name: "mohammad" ,
 age: 18,
 city: "moscow"
}

const E21 = () => <h1 className='fullCenter text-5xl'>E21</h1>

export default E21