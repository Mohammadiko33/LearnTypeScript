import React from "react";
import ChildrenPropUse from "./ChildrenPropUse";

const E12 = () => {
  return (
      <div className="fullCenterCol">
        <ChildrenPropUse>
            this is child 1
            {/* <h1>hello world</h1> */}
            {/* {null} */}
        </ChildrenPropUse>

        <ChildrenPropUse children={<>this is child 2</>} />
      </div>
  );
};
export default E12;

