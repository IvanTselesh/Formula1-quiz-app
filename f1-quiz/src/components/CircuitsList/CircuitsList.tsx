import {PostsList} from "../PostList/PostsList/PostsList";
import {useEffect, useState} from "react";
import {IPost} from "../PostList/PostItem/PostItem";
import {fetchAllCircuits} from "../../api/posts";

interface IProps extends IPost {
  competition?: {
    id?: number
    name?: string
    location?: {
      country?: string
      city?: string
    }
  }
  first_grand_prix?: number
  laps?: number
  length?: string
  race_distance?: string
  lap_record?: {
    time?: string
    driver?: string
    year?: string
  }
  capacity?: number
  opened?: number
  owner?: string | null
}


export const CircuitsList = () => {
  const [posts, setPosts] = useState<IProps[]>([]);

  useEffect(() => {
    fetchAllCircuits()
      .then((values) => {
        setPosts(values.response)
      })
  }, []);

  return (
   <PostsList posts={posts} />
  );
};