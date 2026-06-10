import React, { useState , useMemo} from "react";
import Users from "../../Data/CommonnetData/Users.json";
import Comments from "../../Data/CommonnetData/Comment.json";
import Posts from "../../Data/CommonnetData/Posts.json";

import Gallery from "./Gallery.jsx";
import Post from "./Post.jsx";

const Feeds = ({ CNtheme }) => {

  const shuffled = useMemo(() => {
    return [...Posts].sort(() => Math.random() - 0.5);
  }, [Posts]);

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
            key={post.id}
            post={post}
            Users={Users}
            Comments={Comments}
            CNtheme={CNtheme}
          />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
