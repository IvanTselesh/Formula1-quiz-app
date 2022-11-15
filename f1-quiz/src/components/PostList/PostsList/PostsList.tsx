import {IPost, PostItem} from "../PostItem/PostItem";
import React from "react";
import styles from "./style.module.css";
import {useNavigate} from "react-router-dom";

export interface IPosts {
  posts: IPost[]
}

export const PostsList = (props: IPosts) => {
  const navigate = useNavigate();

  const chooseItem = (item: string) => {
    if(item === '/circuits') {
      return 'circuits'
    }
    if(item === '/drivers') {
      return 'drivers'
    }
    if(item === '/constructors') {
      return 'constructors'
    }
  };

  const navigateToSelectedPost = (postId: number | undefined) => {
    navigate(`/${chooseItem(window.location.pathname)}/${postId}`)
  }

  return (
    <div className={styles.listWrap}>
      {props.posts.map((item) => {
        const moveToPost = () => {
          navigateToSelectedPost(item.id)
        }

        return <PostItem
          id={item.id}
          name={item.name}
          image={item.image ? item.image : item.logo}
          nationality={item.nationality}
          date={item.date}
          onClick={moveToPost}
        />
      })}
    </div>
  )
};