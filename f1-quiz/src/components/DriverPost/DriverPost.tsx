import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {options} from "../../api/posts";
import styles from "../DriverPost/style.module.css";
import {Button} from "../Button/Button";

export const DriverPost = () => {
  const param = useParams();
  const [post, setPost] = useState<[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = fetch(`https://api-formula-1.p.rapidapi.com/drivers?id=${param.id}`, options);
    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setPost(values.response);
      })
  }, []);

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.postWrap}>
      <ul className={styles.postWrapList}>
        {post.map((item: any) => {
          return (
            <>
              <div className={styles.postWrapListImg}>
                <img className={styles.postWrapListImgItem} src={item.image} />
              </div>
              <li className={styles.postWrapListItem}>
                <p>Name:</p>
                <p>{item.name}</p>
              </li>
              <li className={styles.postWrapListItem}>
                <p>Nationality:</p>
                <p>{item.nationality}</p>
              </li>
              <li className={styles.postWrapListItem}>
                <p>Birthdate:</p>
                <p>{item.birthdate}</p>
              </li>
              <li className={styles.postWrapListItem}>
                <p>Number:</p>
                <p>{item.number}</p>
              </li>
              <li className={styles.postWrapListItem}>
                <p>Highest rate finish:</p>
                <p>{item.highest_rate_finish.position}</p>
              </li>
              <li className={styles.postWrapListItem}>
                <p>Highest grid position:</p>
                <p>{item.highest_grid_position}</p>
              </li>
              <li className={styles.postWrapListItem}>
                <p>Career points:</p>
                <p>{item.career_points}</p>
              </li>
            </>
          )
        })}
      </ul>
      <Button name='Return' onClick={handleOnClick} />
    </div>
  )
}