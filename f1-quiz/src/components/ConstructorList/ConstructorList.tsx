import {PostsList} from "../PostList/PostsList/PostsList";
import {useEffect, useState} from "react";
import {IPost} from "../PostList/PostItem/PostItem";
import {fetchAllConstructors} from "../../api/posts";

interface IProps extends IPost {
  logo?: string
  base?: string
  first_team_entry?: number
  world_championships?: number
  highest_race_finish?: {
    position?: number
    number?: number
  }
  pole_positions?: number
  fastest_laps?: number
  president?: string
  director?: string
  technical_manager?: string
  chassis?: string
  engine?: string
  tyres?: string
}

export const ConstructorList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetchAllConstructors()
      .then((values) => {
        setPosts(values.response)
      })
  }, []);

  return (
    <PostsList posts={posts} />
  )
}