import styles from "./style.module.css";
import {useNavigate, useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import {options} from "../../api/posts";
import {Button} from "../Button/Button";

export const CircuitPost = () => {
  const param = useParams();
  const [post, setPost] = useState<[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = fetch(`https://api-formula-1.p.rapidapi.com/circuits?id=${param.id}`, options);
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
              <p>Location:</p>
              <p>{item.competition.location.country}</p>
            </li>
            <li className={styles.postWrapListItem}>
              <p>First grand prix:</p>
              <p>{item.first_grand_prix}</p>
            </li>
            <li className={styles.postWrapListItem}>
              <p>Laps:</p>
              <p>{item.laps}</p>
            </li>
            <li className={styles.postWrapListItem}>
              <p>Length:</p>
              <p>{item.length}</p>
            </li>
            <li className={styles.postWrapListItem}>
              <p>Race Distance:</p>
              <p>{item.race_distance}</p>
            </li>
            <li className={styles.postWrapListItem}>
              <p>Lap record:</p>
              <p>{item.lap_record.time}</p>
            </li>
          </>
          )
        })}
      </ul>
      <Button name='Return' onClick={handleOnClick} />
    </div>
  )
};