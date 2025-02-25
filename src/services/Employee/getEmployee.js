const BASE_URL = 'http://localhost:3001/employees';

export const getEmployee = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  
  return data;
};