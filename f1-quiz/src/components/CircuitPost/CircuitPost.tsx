import styles from "./style.module.css";
import {useNavigate, useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import {fetchCircuitPost, fetchCircuitSearchPosts, options} from "../../api/posts";
import {Button} from "../Button/Button";
import {PostTemplate} from "../PostTemplate/PostTemplate";
import {ICircuit} from "../../types/post";

export const CircuitPost = () => {
  const param = useParams();
  const [postData, setPostData] = useState<[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCircuitPost(param.id)
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setPostData(values.response);
      })
  }, []);

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.postWrap}>
      <ul className={styles.postWrapList}>
        {postData.map((item: ICircuit) => {
          return (
            <PostTemplate
              type='circuit'
              name={item.name}
              image={item.image}
              location={item.competition.location.country}
              firstGrandPrix={item.first_grand_prix}
              laps={item.laps}
              length={item.length}
              distance={item.race_distance}
              lapRecord={item.lap_record.time}
            />
          )
        })}
      </ul>
      <Button name='Return' onClick={handleOnClick} />
    </div>
  )
};