import React, { useEffect } from "react";

export default function Self({
  setCNProfile,
  CNtheme,
  profile,
  onBack,
  CNprofile,
}) {
  const user = CNprofile;

  useEffect(() => {
    const popupBody = document.querySelector(".lilum-scroll");
    if (popupBody) {
      popupBody.scrollTop = 0;
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col inset-0 relative w-full h-full gap-1">
        <div
          className="w-full h-20 relative"
          style={{ backgroundColor: user?.col || CNtheme.sec }}
        >
          <button
            onClick={onBack}
            style={{ color: CNtheme.text }}
            className="m-1 hover:backdrop-brightness-50 flex center p-1 transition rounded-full"
          >
            <span className="material-symbols-outlined">
              arrow_back_ios_new
            </span>
          </button>

          <img
            src={user?.pfp || "https://picsum.photos/200"}
            alt={user?.un}
            className="h-20 w-20 absolute -bottom-10 left-1 rounded-full"
            style={{ border: `3px solid ${CNtheme.bg}` }}
          />
        </div>

        <div className="ml-22">
          <p className="font-bold poppins text-lg flex gap-1 items-center">
            {user?.name}
          </p>

          <p className="text-sm leading-0 opacity-45">
            @{user?.username}
          </p>
        </div>

        <div className="m-1 mt-2">
          <p className="text-sm opacity-95">{user?.bio}</p>
        </div>
      </div>
    </div>
  );
}