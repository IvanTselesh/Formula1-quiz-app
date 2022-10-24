import {PostItem} from "../PostItem/PostItem";
import React from "react";
import styles from "./style.module.css";

export const PostsList = () => {
  return (
    <div className={styles.listWrap}>
      <PostItem date='1905-05-10' surname='Miguel' name="Fangio" nationality="Italian" />
      <PostItem date='1905-05-10' surname='Miguel' name="Fangio" nationality="Italian" />
      <PostItem date='1905-05-10' surname='Miguel' name="Fangio" nationality="Italian" />
      <PostItem date='1905-05-10' surname='Miguel' name="Fangio" nationality="Italian" />
      <PostItem date='1905-05-10' surname='Miguel' name="Fangio" nationality="Italian" />
      <PostItem date='1905-05-10' surname='Miguel' name="Fangio" nationality="Italian" />
    </div>
  )
};