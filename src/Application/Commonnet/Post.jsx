import React, { useMemo, useState } from "react";
import Gallery from "./Gallery.jsx";
export default function Post({ post, Users, Comments, CNtheme }) {
  const user = Users.find((user) => user.id === post.uid);

  const comment = Comments.filter((comment) => comment.pid === post.id);

  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  function onError () {
    e.target.onerror = null;
    e.target.src = `${import.meta.env.BASE_URL}/pfp/D.png`;
  }

  return (
    <div
      key={post.id}
      className="rounded-2xl border border-white/10 w-7/8 m-2 flex overflow-hidden justify-center flex-col"
      style={{ color: CNtheme.text, backgroundColor: CNtheme.pri }}
    >
      <div className="flex items-center">
        <img src={user?.pfp || "https://picsum.photos/200"} className="rounded-2xl h-10 w-10 mx-2 mt-2" onError={onError}/>
        <div>
          <p>{user?.n}</p>
          <p className="text-[10px] opacity-60">{user?.un}</p>
        </div>
        <p>
          {user?.v ? (
            <span className="material-symbols-outlined" style={{color: CNtheme.yellow}}>verified</span>
          ) : null}
        </p>
      </div>

      <div className="flex flex-col">
        <p style={{ textIndent: "2em" }}>{post.c}</p>
      </div>

      <div>
        <Gallery media={post.m} />
      </div>
      <div className="flex gap-[1em] my-1 ml-1 text-sm relative opacity-80">
        <div className="flex">
          <button onClick={() => setLike((prev) => !prev)}>
            <span
              className="material-symbols-outlined"
              style={{ color: like ? CNtheme.yellow : CNtheme.text }}
            >
              {like ? "Mood" : "add_reaction"}
            </span>
          </button>
          <p className="ml-1">{like ? post.l + 1 || 1 : post.l || 0}</p>
        </div>
        <div className="flex ">
          <button onClick={() => setDislike((prev) => !prev)}>
            <span
              className="material-symbols-outlined"
              style={{ color: dislike ? CNtheme.blue : CNtheme.text }}
            >
              {dislike ? "sentiment_sad" : "sentiment_dissatisfied"}
            </span>
          </button>
          <p className="ml-1">{dislike ? post.dl + 1 || 1 : post.dl || 0}</p>
        </div>
        <p className="absolute bottom-1 right-7 flex center">
          <span
            className="material-symbols-outlined mr-1 opacity-50"
            style={{ color: CNtheme.text }}
          >
            visibility
          </span>
          {post.v ? post.v : 100 + Math.floor(Math.random() * post.l || 100)}
        </p>
      </div>
      <hr></hr>
      {comment?.map((c) => {
        const cuser = Users.find((u) => u.id === c.uid);
        return (
          <div
            key={c.id}
            style={{ color: CNtheme.text }}
            className="flex gap-2 relative"
          >
            <div className="inherit flex center">
              <img
                src={cuser?.pfp}
                alt={cuser.n}
                className="w-8 h-8 m-1 rounded-[50%]"
                onError={onError}
              />
            </div>

            <div className="text-sm">
              <p className="opacity-80">{cuser?.n} </p>
              <p>{c?.c}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
