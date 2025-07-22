import React from "react";

/*
📘 این فایل بر اساس tsconfig.app.json ساخته شده:

  - target: ES2022 → امکان استفاده از ویژگی‌های جدید مثل at(), ??, ??=
  - strict: true → تایپ‌ها باید دقیق باشن
  - jsx: react-jsx → نیازی به import React نیست
  - moduleResolution: bundler → برای سازگار شدن با Vite و ESBuild
  - noEmit: true → خروجی js ساخته نمی‌شه، فقط بررسی تایپ‌ها
  - noUnusedLocals/Parameters → نباید هیچ کد مرده‌ای باشه
*/

// 🟢 ویژگی جدید ES2022: استفاده از Array.prototype.at()
const getLastItem = (arr: string[]): string | undefined => arr.at(-1);

// 🔵 استفاده از تایپ‌های اختیاری در حالت strict
type User = {
  name: string;
  age?: number; // چون tsconfig سخت‌گیرانه‌ست، باید همیشه چک کنیم
};

// 🟠 تابعی که از ویژگی ?? (nullish coalescing) استفاده می‌کنه
const showUserInfo = (user: User): string => {
  return `${user.name} is ${user.age ?? "unknown"} years old`;
};

const E24 = () => {
  const userList: User[] = [
    { name: "Ali", age: 22 },
    { name: "Sara" } // age مشخص نیست
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">TSConfig (from tsconfig.app.json)</h1>
      <ul className="list-disc pl-4">
        {userList.map((user, index) => (
          <li key={index}>{showUserInfo(user)}</li>
        ))}
      </ul>

      <p className="mt-4 text-sm text-gray-600">
        Last user: {getLastItem(userList)?.name ?? "None"}
      </p>
    </div>
  );
};

export default E24;