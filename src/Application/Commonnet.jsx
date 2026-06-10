import React, { useEffect, useState } from "react";
import PopUp from "../Component/Pop-up";
import { useLilumTheme } from "../Systems/Lilum/Theme";

import Feeds from "./Commonnet/Feeds";

const Commonnet = (props) => {
  const { theme } = useLilumTheme();

  const [CNtheme, setCNtheme] = useState({});

  useEffect(() => {
    //this pallet made by chat-gpt will change soon
    if (theme.dark) {
      setCNtheme({
        bg: "#181A1F", // Main background
        pri: "#22252B", // Cards/posts
        sec: "#2D3138", // Elevated surfaces
        light: "#4B5563", // Borders/hover
        dark: "#111317", // Deep shadows
        yellow: "#F4C24E", // Brand color
        text: "#F9FAFB", // Main text
        super: "white",
        blue: "#3B82F6"
      });
    } else {
      setCNtheme({
        bg: "#FAFAFA", // App background
        pri: "#FFFFFF", // Cards/posts
        sec: "#F5F7FA", // Secondary surfaces
        light: "#f6ebe0", // Borders
        dark: "#D1D5DB", // Strong accents
        yellow: "#F4C24E", // Brand color
        text: "#374151", // Main text
        super: "black",
        blue: "#60A5FA"
      });
    }
  }, [theme.dark]);

  return (
    <PopUp
      title="CommonNet"
      {...props}
      style={{ color: theme.text, backgroundColor: theme.pri }}
      handleStyle={{
        backgroundColor: CNtheme.light || "White",
        color: theme.dark ? "white" : CNtheme.text || "Black",
      }}
      bodyStyle="scroll-thin lilum-scroll"
    >
      <Feeds CNtheme={CNtheme} />
    </PopUp>
  );
};

export default Commonnet;
