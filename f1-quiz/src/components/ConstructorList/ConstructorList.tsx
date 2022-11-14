import {PostsList} from "../PostList/PostsList/PostsList";
import {ChangeEventHandler, useEffect, useState} from "react";
import {IPost, PostItem} from "../PostList/PostItem/PostItem";
import {fetchAllConstructors, fetchConstructorSearchPosts} from "../../api/posts";
import {Input} from "../Input/Input";
import styles from "../PostList/PostsList/style.module.css";

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
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchAllConstructors()
      .then((values) => {
        setPosts(values.response)
      })
  }, [searchText.length === 0]);

  useEffect(() => {
    fetchConstructorSearchPosts(searchText)
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setPosts(values.response)
      })
  }, [searchText.length >= 3])

  const handleOnConstructorChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value);
  };

  const filteredPosts = posts.filter((item) => {
    if(item.name.toLowerCase().includes(searchText)) {
      return true
    } else {
      return false
    }
  })

  return (
    <>
      <Input text={searchText} onChange={handleOnConstructorChange} />
      {searchText.length < 3 ?
        <PostsList posts={posts}/> :
        <div className={styles.listWrap}>
          {filteredPosts.map((item) => {
            return <PostItem image={item.image} name={item.name} />
          })}
        </div>
        }
    </>

  )
}