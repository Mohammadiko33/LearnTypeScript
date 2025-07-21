import React from "react";

type Props = {};

const E5 = (props: Props) => {
  // ورودی های تابع رو مشخص میکنیم
  // در اینجا دو ورودی داریم که هر دو از نوع عدد هستند
  // و خروجی تابع هم از نوع عدد است
  const sum = (num1: number, num2: number): number => num1 + num2;
  return <div className="fullCenter text-6xl">{sum(4, 6)}</div>;
};

export default E5;
