import {useNavigate, useParams} from "react-router-dom";
import {ChangeEventHandler, useEffect, useState} from "react";
import {fetchDriverPost, options} from "../../api/posts";
import styles from "../DriverPost/style.module.css";
import {Button} from "../Button/Button";
import {PostTemplate} from "../PostTemplate/PostTemplate";
import {IDriver} from "../../types/post";
import {Input} from "../Input/Input";

interface IDriverPost {
  search: string
  post: IDriver
}

export const DriverPost = () => {
  const [postData, setPostData] = useState<[]>([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    fetchDriverPost(search)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPostData(json.response);
      })
  }, [search.length >= 3]);

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.postDriverWrap}>
      <Input text={search} onChange={handleOnChange} />
      <ul className={styles.postWrapList}>
        {postData.map((item: IDriver ) => {
          return (
            <PostTemplate
              type='driver'
              name={item.name}
              image={item.image}
              nationality={item.nationality}
              birthdate={item.birthdate}
              number={item.number}
              highestFinish={item.highest_race_finish.position}
              highestRatePosition={item.highest_grid_position}
              careerPoints={item.career_points}
            />
          )
        })}
      </ul>
      <Button name='Return' onClick={handleOnClick} />
    </div>
  )
}