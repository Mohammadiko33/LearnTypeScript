import type { ComponentProps , ComponentPropsWithRef , ComponentPropsWithoutRef } from "react";

type Props = ComponentProps<"button">
type PropsWithRef = ComponentPropsWithRef<"button">
type PropsNoRef = ComponentPropsWithoutRef<"button">

// Ref = رف
// اگه ما بخایم از پراپ رف استفاده نکنیم بهتره که از
// ComponentPropsWithoutRef استفاده بکنیم 
// ولی اگه خاستیم از رف استفاده کنیم از این دوتا زیر میشه استفاده کرد
// ComponentProps && ComponentPropsWithRef


type ButtonProps = ComponentProps<"button"> & {
    title?: string;
};

const Button = ({title} : ButtonProps) => {
  return <button className="bg-blue-500 text-white p-2">{title ?? "click me"}</button>;
};

export default Button;
