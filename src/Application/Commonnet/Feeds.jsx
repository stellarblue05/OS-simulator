import React, { useState , useMemo, useEffect} from "react";

import Gallery from "./Gallery.jsx";
import Post from "./Post.jsx";

const Feeds = ({ CNtheme , setPage, Users, Posts}) => {

  const shuffled = useMemo(() => {
    return [...Posts].sort(() => Math.random() - 0.5);
  }, [Posts]);

  //Go on top when reload
    useEffect(() => {
      const popupBody = document.querySelector(".lilum-scroll");
      if (popupBody) {
        popupBody.scrollTop = 0;
      }
    }, []);
  

  return (
    <div className="w-full h-full">
      <div className="inherit flex flex-col items-center">
        <div className={`w-7/8 h-10 my-2 rounded`}>
          <p className="font-bold text-4xl" style={{ color: CNtheme.yellow }}>
            Commonnet :-)
          </p>
        </div>
        {shuffled?.map((post) => (
          <Post
          setPage={setPage}
            key={post.id}
            post={post}
            Users={Users}
            CNtheme={CNtheme}
          />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
