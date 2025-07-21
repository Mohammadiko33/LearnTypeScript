import React from "react";

type Props = {};

const E1 = (props: Props) => {
  const numFirst = 5;
  const strFirst = "Hello World";
  const boolFirst = true;
  const num: number = 5;
  const str: string = "Hello World";
  const bool: boolean = true;

  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr2: string[] = ["mohammad"];
  const arr3: (number | string)[] = [1, "mohammad", 2, "amir"];
  const arrFull: (number | string | boolean)[] = [1, "mohammad" , true , 2, "amir" , false];
  const user: { name: string; age: number } = { name: "John", age: 30 };

  const user1 = {
    name: "Mohammad",
    age: 25,
    isMarried: true,
  }

  const user2 : {name: string , age: number} = {
    name: "Amir",
    age: 30,
    // isMarried: false, // This will cause an error because isMarried is not defined in the type
  }

  return (
    <div className="text-sky-400 select-none text-5xl fullCenter">
      {bool && str} {arr[num]} || Name : {user.name} , Age : {user.age}{" "}
    </div>
  );
};

export default E1;
