import {IPost, PostItem} from "../PostItem/PostItem";
import React from "react";
import styles from "./style.module.css";

export interface IPosts {
  posts: IPost[]
}

export const PostsList = (props: IPosts) => {
  return (
    <div className={styles.listWrap}>
      {props.posts.map((item) => {
        return <PostItem
          id={item.id}
          name={item.name}
          image={item.image ? item.image : item.logo}
          nationality={item.nationality}
          date={item.date}
        />
      })}
    </div>
  )
};