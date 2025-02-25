import React, { useEffect, useState } from 'react';
import { EmployeeSearch } from '../../components/Employee/Search/EmployeeSearch';
import { EmployeeDesktop } from '../../components/Employee/Desktop';
import { EmployeeMobile } from '../../components/Employee/Mobile';

import './Home.css';
import { mapperGetEmployee } from '../../utils/mappers/Employee/mapperGetEmployee';

const BASE_URL = 'http://localhost:3001/employees';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => setData(
        mapperGetEmployee(json)
      ));
  }, []);

  return (
    <section className='home__container'>
      <div className='home__content-header'>
        <h1>Funcionários</h1>

        <EmployeeSearch />
      </div>

      <EmployeeDesktop employees={data} />

      <EmployeeMobile employee={data} />
    </section>
  );
};

export default Home;
