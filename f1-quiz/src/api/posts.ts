import {useParams} from "react-router-dom";



export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '542deab558msh36ed804cde9dac9p12344djsnf46d7135de68',
    'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
  }
};


export const fetchAllDrivers = () => {
  return fetch('https://api-formula-1.p.rapidapi.com/drivers', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '542deab558msh36ed804cde9dac9p12344djsnf46d7135de68',
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  })
    .then((response) => {
      return response.json();
    })
};

export const fetchAllCircuits = () => {
  return fetch('https://api-formula-1.p.rapidapi.com/circuits', options)
    .then((response) => {
      return response.json()
    })
};

export const fetchAllConstructors = () => {
  return fetch('https://api-formula-1.p.rapidapi.com/teams', options)
    .then((response) => {
      return response.json()
    })
};

export const fetchDriverPost = (searchText: string | undefined) => {
  return fetch(`https://api-formula-1.p.rapidapi.com/drivers?search=${searchText}`, options)
};

export const fetchCircuitPost = (id: string | undefined) => {
  return fetch(`https://api-formula-1.p.rapidapi.com/circuits?id=${id}`, options)
};

export const fetchConstructorPost = (id: string | undefined) => {
  return fetch(`https://api-formula-1.p.rapidapi.com/teams?id=${id}`, options)
};

export const fetchConstructorSearchPosts = (text: string | undefined) => {
  return fetch(`https://api-formula-1.p.rapidapi.com/teams?search=${text}`, options)
};

export const fetchCircuitSearchPosts = (text: string | undefined) => {
  return fetch(`https://api-formula-1.p.rapidapi.com/circuits?search=${text}`, options)
}