import React, {createContext, useContext} from "react";

export const LilumThemeContext = createContext
export const lilumTheme = () => useContext(ThemeContext);

export default function Theme (dark) {

    return dark ? {
        bg: "#2A2438CC",
        text: "#E8EAF2",
        hover: "rgba(255,255,255,0.1)"
    } : {
        bg: "#bfaaca73",
        text: "#2A2D3E",
        hover: "rgba(0,0,0,0.1)"
    }
}