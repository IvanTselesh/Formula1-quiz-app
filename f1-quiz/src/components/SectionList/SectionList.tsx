import {PostsList} from "../PostList/PostsList/PostsList";
import {IPost, PostItem} from "../PostList/PostItem/PostItem";
import {car, driver, track} from "../../assets/assets";
import styles from "./style.module.css";
import {useNavigate} from "react-router-dom";

export const SectionList = () => {
  const navigate = useNavigate();

  const handleOnDrivers = () => {
    navigate('/drivers');
  };

  const handleOnCircuits = () => {
    navigate('/circuits');
  };

  const handleOnConstructors = () => {
    navigate('/constructors');
  };

  return (
    <div className={styles.sections}>
      <PostItem name='Drivers' image={driver} description='List of drivers' onClick={handleOnDrivers} />
      <PostItem name='Circuits' image={track} description='List of circuits' onClick={handleOnCircuits} />
      <PostItem name='Constructors' image={car} description='List of teams' onClick={handleOnConstructors} />
    </div>
  )
}