import {PostsList} from "../PostList/PostsList/PostsList";
import {ChangeEventHandler, useEffect, useState} from "react";
import {IPost, PostItem} from "../PostList/PostItem/PostItem";
import {fetchAllCircuits, fetchCircuitSearchPosts} from "../../api/posts";
import {Input} from "../Input/Input";
import {useNavigate} from "react-router-dom";
import styles from "../PostList/PostsList/style.module.css";

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
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllCircuits()
      .then((values) => {
        setPosts(values.response)
      })
  }, [searchText.length === 0]);

  useEffect(() => {
    fetchCircuitSearchPosts(searchText)
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setPosts(values.response)
      })
  }, [searchText.length >= 3])

  const handleOnCircuitChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value)
  };

  const filteredPosts = posts.filter((item) => {
    if(item.name.toLowerCase().includes(searchText)) {
      return true
    } else {
      return false
    }
  });

  const navigateToSelectedPost = (id: number | undefined) => {
    navigate(`/circuits/${id}`)
  };

  return (
    <>
      <Input text={searchText} onChange={handleOnCircuitChange} />
      {searchText.length < 3 ?
        <PostsList posts={posts}/> :
        <div className={styles.listWrap}>
          {filteredPosts.map((item) => {
            return <PostItem image={item.image} name={item.name} onClick={() => navigateToSelectedPost(item.id)}/>
          })}
        </div>
      }
    </>
  );
};