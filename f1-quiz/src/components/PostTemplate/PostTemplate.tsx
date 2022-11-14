import styles from "../ConstructorPost/style.module.css";

interface IItem {
  type: 'constructor' | 'driver' | 'circuit'
  name: string
  image: string
  base?: string
  championship?: number
  location?: string
  firstGrandPrix?: number
  director?: string
  manager?: string
  chassis?: string
  engine?: string
  nationality?: string
  birthdate?: string
  number?: number
  careerPoints?: string
  highestRatePosition?: number
  highestFinish?: number
  laps?: number
  length?: string
  distance?: string
  lapRecord?: string
}

export const PostTemplate = (props: IItem) => {
  const data = {
    constructors: ['Base:', 'World championships:', 'Director:','Technical manager:', 'Chassis:', 'Engine:'],
    circuits: ['Location:', 'First grand prix:', 'Laps:', 'Length:', 'Race Distance:', 'Lap record:'],
    drivers: ['Nationality:', 'Birthdate:', 'Number:', 'Highest rate finish:', 'Highest grid position:', 'Career points:'],
  }


  const chooseType = (index: number) => {
    if(props.type === 'constructor') {
      return data.constructors[index]
    }
    if(props.type === 'driver') {
      return data.drivers[index]
    }
    if(props.type === 'circuit') {
      return data.circuits[index]
    }
  };

  return (
    <div className={styles.postWrap}>
      <div className={styles.postWrapListImg}>
        <img className={styles.postWrapListImgItem} src={props.image} />
      </div>
      <li className={styles.postWrapListItem}>
        <p>Name:</p>
        <p>{props.name}</p>
      </li>
      <li className={styles.postWrapListItem}>
        <p>{chooseType(0)}</p>
        <p>{props.base}{props.location}{props.nationality}</p>
      </li>
      <li className={styles.postWrapListItem}>
        <p>{chooseType(1)}</p>
        <p>{props.championship}{props.firstGrandPrix}{props.birthdate}</p>
      </li>
      <li className={styles.postWrapListItem}>
        <p>{chooseType(2)}</p>
        <p>{props.director}{props.laps}{props.number}</p>
      </li>
      <li className={styles.postWrapListItem}>
        <p>{chooseType(3)}</p>
        <p>{props.manager}{props.length}{props.highestFinish}</p>
      </li>
      <li className={styles.postWrapListItem}>
        <p>{chooseType(4)}</p>
        <p>{props.chassis}{props.distance}{props.highestRatePosition}</p>
      </li>
      <li className={styles.postWrapListItem}>
        <p>{chooseType(5)}</p>
        <p>{props.engine}{props.lapRecord}{props.careerPoints}</p>
      </li>
    </div>
  )
}