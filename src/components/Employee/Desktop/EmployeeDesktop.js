
import './EmployeeDesktop.css';

export const EmployeeDesktop = ({ employees }) => {
  return (
    <div className="home__content-desktop-view">
      <table className="home__content-desktop-table">
        <thead>
          <tr>
            <th>foto</th>
            <th>nome</th>
            <th>cargo</th>
            <th>data de admissão</th>
            <th>telefone</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="home__content-desktop-table-row">
              <td>
                <img src={employee.image} alt={'Foto do colaborador ' + employee.name} className="home__content-desktop-employee-photo" />
              </td>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>{employee.admission_date}</td>
              <td>{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};