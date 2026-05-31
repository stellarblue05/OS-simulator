import React from "react";
import PopUp from "../Component/Pop-up";

const ThisPC = (props) => {
  return (
    <PopUp title="This PC" {...props} style={{backgroundColor : "#1e1e1ecc", backdropFilter: "blur(5px)"}} textColor="text-white" >
      <div>
        <p>Yo</p>
      </div>
    </PopUp>
  );
};

export default ThisPC;
