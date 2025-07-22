import React , {useState , useEffect} from "react";

type User = {
  id: number | string;
  name: string;
  city: string;
};

const E22 = () => {

    const [isSet , setIsSet] = useState<boolean>(false);

  const setItemFromLocalSt = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ id: 1, name: "mohammad", city: "moscow" })
    );
    setIsSet(true);
}

    const getemFromLocalSt2 = () => console.log(JSON.parse(localStorage.getItem("user") || "{}"));
    const getemFromLocalSt3 = () => console.log(JSON.parse(localStorage.getItem("user") || "null"));
    const getemFromLocalSt = () => console.log(JSON.parse(localStorage.getItem("user") as string ));

    useEffect(() => {
        getemFromLocalSt2()
        getemFromLocalSt3()
        getemFromLocalSt()
    }, [isSet])

// best way
//     const getemFromLocalSt4 = () => {
//   const userStr = localStorage.getItem("user");
//   if (!userStr) return console.log(null); // یا می‌تونی مقدار پیش‌فرض بده
//   try {
//     const user = JSON.parse(userStr);
//     console.log(user);
//   } catch (e) {
//     console.error("Invalid JSON in localStorage", e);
//   }
// };

  return <button onClick={setItemFromLocalSt} className="bg-blue-500 text-white p-2">set Item in localStorage</button>;
};

export default E22;
