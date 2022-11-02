import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {options} from "../../api/posts";
import styles from "../ConstructorPost/style.module.css";
import {Button} from "../Button/Button";

export const ConstructorPost = () => {
  const param = useParams();
  const [post, setPost] = useState<[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = fetch(`https://api-formula-1.p.rapidapi.com/teams?id=${param.id}`, options);
    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setPost(values.response);
      })
  }, []);

  const clickOnHandle = () => {
    navigate(-1)
  }

  return (
    <div className={styles.postWrap}>
      <ul className={styles.postWrapList}>
        {post.map((item: any) => {
          return (
            <>
              <div className={styles.postWrapListImg}>
                <img className={styles.postWrapListImgItem} src={item.logo} />
              </div>
              <li className={styles.postWrapListItem}>
                <p>Name:</p>
                <p>{item.name}</p>
              </li>
              <li className={styles.postWrapListItem}>
                <p>Base:</p>
                <p>{item.base}</p>
              </li>
              <li className={styles.postWrapListItem}>
                <p>World championships:</p>
                <p>{item.world_championships}</p>
              </li>
              <li className={styles.postWrapListItem}>
                <p>Director:</p>
                <p>{item.director}</p>
              </li>
              <li className={styles.postWrapListItem}>
                <p>Technical manager:</p>
                <p>{item.technical_manager}</p>
              </li>
              <li className={styles.postWrapListItem}>
                <p>Chassis:</p>
                <p>{item.chassis}</p>
              </li>
              <li className={styles.postWrapListItem}>
                <p>Engine:</p>
                <p>{item.engine}</p>
              </li>
            </>
          )
        })}
      </ul>
      <Button name='Return' onClick={clickOnHandle} />
    </div>
  )
}