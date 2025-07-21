import React, { useState } from "react";

type StateType = {
  id: number;
  name: string;
};

const E13 = () => {
  const [userInfo, setUserInfo] = useState<StateType | null>(null);

  return (
    <div className="fullCenter text-5xl">
      id : {userInfo?.id} <br /> name : {userInfo?.name}
    </div>
  );
};

export default E13;