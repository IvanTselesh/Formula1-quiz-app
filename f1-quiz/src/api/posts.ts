const options = {
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
  return fetch('https://api-formula-1.p.rapidapi.com/circuits', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '542deab558msh36ed804cde9dac9p12344djsnf46d7135de68',
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  })
    .then((response) => {
      return response.json()
    })
};

export const fetchAllConstructors = () => {
  return fetch('https://api-formula-1.p.rapidapi.com/teams', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '542deab558msh36ed804cde9dac9p12344djsnf46d7135de68',
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  })
    .then((response) => {
      return response.json()
    })
};