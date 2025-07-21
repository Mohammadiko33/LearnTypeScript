import React from "react";

type Props = {};

type Num = number;
type Str = string;
type Bol = boolean;

type Arr = number[];
type Arr2 = string[];
type Arr3 = (number | string)[];
type ArrFull = (number | string | boolean)[];

type User2 = { name: string; age: number };

const E4 = (props: Props) => {
  const numFirst = 5;
  const strFirst = "Hello World";
  const boolFirst = true;
  const num: Num = 5;
  const str: Str = "Hello World";
  const bool: Bol = true;

  const arr: Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr2: Arr2 = ["mohammad"];
  const arr3: Arr3 = [1, "mohammad", 2, "amir"];
  const arrFull: ArrFull = [
    1,
    "mohammad",
    true,
    2,
    "amir",
    false,
  ];

  const user1 = {
    name: "Mohammad",
    age: 25,
    isMarried: true,
  };

  const user2: User2 = {
    name: "Amir",
    age: 30,
  };

  return (
    <div className="text-sky-500 select-none text-5xl fullCenter">
      {bool && str} {arr[num]} || Name : {user2.name} , Age : {user2.age}{" "}
    </div>
  );
};

export default E4;
