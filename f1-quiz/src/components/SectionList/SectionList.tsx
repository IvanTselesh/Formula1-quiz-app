import {PostsList} from "../PostList/PostsList/PostsList";
import {PostItem} from "../PostList/PostItem/PostItem";
import {car, driver, track} from "../../assets/assets";
import styles from "./style.module.css";

export const SectionList = () => {
  return (
    <div className={styles.sections}>
      <PostItem name='Drivers' image={driver} description='List of drivers' />
      <PostItem name='Circuits' image={track} description='List of circuits' />
      <PostItem name='Constructors' image={car} description='List of teams' />
    </div>
  )
}