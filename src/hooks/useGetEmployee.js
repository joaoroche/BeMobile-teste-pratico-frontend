import { useEffect, useState } from 'react';

import { getEmployee } from '../services/Employee/getEmployee';

import { mapperGetEmployee } from '../utils/mappers/Employee/mapperGetEmployee';

export const useGetEmployee = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await getEmployee()
        setData(mapperGetEmployee(response));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployee();
  }, [])

  return { data, isLoading, error, isError: error !== null };
};