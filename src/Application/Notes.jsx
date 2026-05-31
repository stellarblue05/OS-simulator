import React from "react";
import PopUp from "../Component/Pop-up";

const Notes = (props) => {
  return (
    <PopUp title="Notes" {...props}>
      <div>
        <p>Yo</p>
      </div>
    </PopUp>
  );
};

export default Notes;
