import React from 'react';
import { EmployeeSearch } from '../../components/Employee/Search/EmployeeSearch';
import { EmployeeDesktop } from '../../components/Employee/Desktop';
import { EmployeeMobile } from '../../components/Employee/Mobile';
import { EmployeeLoading } from '../../components/Employee/Loading';

import { useGetEmployee } from '../../hooks/useGetEmployee';

import './Home.css';
import { EmployeeError } from '../../components/Employee/Error';

const Home = () => {
  const { data, isLoading, error, isError } = useGetEmployee()

  return (
    <section className='home__container'>
      <div className='home__content-header'>
        <h1>Funcionários</h1>

        <EmployeeSearch />
      </div>

      {isLoading && <EmployeeLoading />}

      {isError && <EmployeeError message={error?.message} code={error?.code} />}

      {!isLoading && !isError && data.length === 0 && <p>Nenhum funcionário encontrado</p>}

      {data.length > 0 && (
        <>
          <EmployeeDesktop employees={data} />

          <EmployeeMobile employee={data} />
        </>
      )}

    </section>
  );
};

export default Home;
