import { useEffect, useMemo, useState } from 'react';

import { getEmployee } from '../services/Employee/getEmployee';

import { mapperGetEmployee } from '../utils/mappers/Employee/mapperGetEmployee';
import { filterByGetEmployee } from '../utils/mappers/Employee/filterByGetEmployee';

export const useGetEmployee = ({ filterByName }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredEmployeeData = useMemo(() => filterByGetEmployee(data, filterByName), [data, filterByName]);

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

  return { data: filteredEmployeeData, isLoading, error, isError: error !== null };
};