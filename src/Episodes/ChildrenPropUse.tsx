import type { Dispatch, SetStateAction } from "react";

interface Props {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

// اینتر فیس میشه گفت همون تایپ هست اما برای ابجکت ها استفاده میشه

// type Props = {
//   name: string;
//   setName: Dispatch<SetStateAction<string>>;
// };

// چه فرقی با تایپ داره

type names = "mohammad" | "amir" | "reza"

// اما اینترفیس نمیتونه به شکل بالا عمل بکنه
// interface names2 = "mohammad" | "amir" | "sarah"

const ChildrenPropUse = ({ name, setName }: Props) => {
  return <>{name}</>;
};

export default ChildrenPropUse;
