import type { ComponentProps } from "react";

type Props = ComponentProps<"button">

// برای اینکه ما بخایم از پراپ های خود باتن استفاده کنیم توی پراپ باید به شکل زیر عمل کنیم

type ButtonProps = ComponentProps<"button"> & {
    title?: string;
};

const Button = ({title} : ButtonProps) => {
  return <button className="bg-blue-500 text-white p-2">{title ?? "click me"}</button>;
};

export default Button;
