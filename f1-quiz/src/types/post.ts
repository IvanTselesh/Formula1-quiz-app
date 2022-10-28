interface ITeam {
  season: number
  team:
    {
      id: number
      name: string
      logo: string
    }
}

export interface IDriver {
  name: string
  image: string
  nationality: string
  abbr: string
  id: number
  country: {
    name: string
    code: string
  }
  birthdate: string
  birthplace: string
  number: number
  highest_rate_finish: {
    position: number
    number: number
  }
  highest_grid_position: number
  career_points: string
  teams: ITeam[]
};

export interface IConstructor {
  id: number
  name: string
  logo: string
  base: string
  first_team_entry: number
  world_championships: number
  highest_race_finish: {
    position: number
    number: number
  }
  pole_positions: number
  fastest_laps: number
  president: string
  director: string
  technical_manager: string
  chassis: string
  engine: string
  tyres: string
}

export interface ICircuit {
  id: number
  name: string
  image: string
  competition: {
    id: number
    name: string
    location: {
      country: string
      city: string
    }
  }
  first_grand_prix: number
  laps: number
  length: string
  race_distance: string
  lap_record: {
    time: string
    driver: string
    year: string
  }
  capacity: number
  opened: number
  owner: string | null
}