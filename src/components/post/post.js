import React from "react";
import style from "./style.module.scss";

const Post = ({ title, body }) => {
  return (
    <div className={style["post-container"]}>
      <div className={style.title}>{title}</div>
      <div className={style.body}>{body}</div>
    </div>
  );
};

export default Post;
