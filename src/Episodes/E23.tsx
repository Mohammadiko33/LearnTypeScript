import React from "react";

// 1. مثال ساده از نوع تولید شده توسط تابع (Generated Type from typeof)
const defaultUser = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};

// استفاده از typeof برای ساخت نوع از آبجکت بالا
type User = typeof defaultUser;

// 2. نوع برگشتی یک تابع (Generated Type from ReturnType)
const getProduct = () => {
  return {
    id: 1,
    title: "Book",
    price: 12.99,
  };
};

type Product = ReturnType<typeof getProduct>;

// 3. نوع پارامترهای تابع (Generated Type from Parameters)
const sayHello = (name: string, age: number) => `Hello ${name}, ${age}`;
type SayHelloArgs = Parameters<typeof sayHello>; // [string, number]

const E23 = () => {
  const user: User = {
    name: "Bob",
    age: 25,
    isAdmin: true,
  };

  const product: Product = getProduct();

  const greetArgs: SayHelloArgs = ["John", 40];
  const greeting = sayHello(...greetArgs);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Generated Types Example</h1>
      <p>User: {user.name}, {user.age} years old, Admin: {String(user.isAdmin)}</p>
      <p>Product: {product.title} - ${product.price}</p>
      <p>{greeting}</p>
    </div>
  );
};

export default E23;