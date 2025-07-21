import type { Dispatch, SetStateAction } from "react";

type Props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

const ChildrenPropUse = ({ name, setName }: Props) => {
  return <>{name}</>;
};

export default ChildrenPropUse;
