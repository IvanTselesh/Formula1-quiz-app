import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchConstructorPost, options} from "../../api/posts";
import styles from "../ConstructorPost/style.module.css";
import {Button} from "../Button/Button";
import {PostTemplate} from "../PostTemplate/PostTemplate";
import {IConstructor} from "../../types/post";

export const ConstructorPost = () => {
  const [postData, setPostData] = useState<[]>([]);
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    fetchConstructorPost(param.id)
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setPostData(values.response);
      })
  }, []);

  const handleOnClick = () => {
    navigate(-1)
  }

  return (
    <div className={styles.postWrap}>
      <ul className={styles.postWrapList}>
        {postData.map((item: IConstructor) => {
          return (
            <PostTemplate
              type='constructor'
              name={item.name}
              image={item.logo}
              base={item.base}
              championship={item.world_championships}
              director={item.director}
              manager={item.technical_manager}
              chassis={item.chassis}
              engine={item.engine}
            />
          )
        })}
      </ul>
      <Button name='Return' onClick={handleOnClick} />
    </div>
  )
}