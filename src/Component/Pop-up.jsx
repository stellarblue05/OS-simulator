import React from "react";
import { useDraggable } from "@dnd-kit/core";

const PopUp = ({ title, children, width, height, id, focus, z, x, y, onClose, textColor, Xcolor, style}) => {
  const { setNodeRef, listeners, attributes, transform, isDragging } =
    useDraggable({ id: id });

  return (
    <div
      className={`absolute  w-[400px] h-[300px] rounded-2xl shadow-2xl overflow-hidden bg-white border border-[#dbdbdb77]` }
       
      style={{
        top: y, 
        left: x,
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
        zIndex: isDragging ? z+=1 : z,
        boxShadow: isDragging
          ? "6px 9px 15px rgba(0,0,0,0.3)"
          : "1px 1px 5px rgba(0,0,0,0.1)",
        ...style,
      }}
      onMouseDown={() => focus(id)}
    >
      {/* Handle */}
      <div className={`flex relative h-7 ${textColor || "text-black"}` }>
        {" "}
        <div className="h-full w-full m-1 cursor-grab"  {...listeners} {...attributes} ref={setNodeRef}>
          <p className="font-mono">{title}</p>{" "}
        </div>
        <button
          className={`w-10 font-mono h-full absolute ${Xcolor ? Xcolor : null} right-0`}
          onClick={() => onClose(id)}
          onMouseDown={(e) => e.stopPropagation()}
        >
          X
        </button>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default PopUp;
