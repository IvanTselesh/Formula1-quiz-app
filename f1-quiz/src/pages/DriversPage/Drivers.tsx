import {Container} from "../../components/Container/Container";
import {Header} from "../../components/Header/Header";
import {PostsList} from "../../components/PostList/PostsList/PostsList";
import {useEffect, useState} from "react";
import {fetchAllDrivers} from "../../api/posts";
import {IDriver} from "../../types/post";

export const DriversPage = () => {
  const [posts, setPosts] = useState<IDriver[]>([]);
  console.log(posts)

  useEffect(() => {
    fetchAllDrivers()
      .then((values)=> {
        setPosts(values)
      })
  }, []);

  return (
    <Container>
      <Header />
      <PostsList posts={posts} />
    </Container>
  );
};