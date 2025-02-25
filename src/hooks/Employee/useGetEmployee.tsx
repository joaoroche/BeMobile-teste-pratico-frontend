import { useEffect, useMemo, useState } from 'react';

import { filterByGetEmployee } from '../../utils/mappers/Employee/filterByGetEmployee'
import { mapperGetEmployee } from '../../utils/mappers/Employee/mapperGetEmployee'
import { getEmployee } from '../../services/Employee/getEmployee';
import { IEmployeeProps } from '../../@types/Employee';

export const useGetEmployee = ({ filterByName }: { filterByName: string }) =>  {
  const [data, setData] = useState<IEmployeeProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const filteredEmployeeData = useMemo(() => filterByGetEmployee(data, filterByName), [data, filterByName]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await getEmployee() as IEmployeeProps[];
        setData(mapperGetEmployee(response));
      } catch (error: Error | any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployee();
  }, [])

  return { data: filteredEmployeeData, isLoading, error, isError: error !== null };
};