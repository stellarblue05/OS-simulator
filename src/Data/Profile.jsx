import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profiles, setProfiles] = useState({
    lilum: {
      pfp: "/pfp/C-1.png",
      username: "Daisy1280",
      name: "Daisy",
      device: "Ampro Pad 12",
      email: "Daisy1280@Promail.com",
      bio: "Getting bored today.",
    },
  });

  return (
    <ProfileContext.Provider value={{ profiles, setProfiles }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
