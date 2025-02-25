import { useState } from "react"
import { ChevronDown, Dot } from "lucide-react"

import './EmployeeMobile.css'

export const EmployeeMobile = ({ employee }) => {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <div className="home__content-mobile-view">
      <div className="home__content-mobile-list">

        <div
          className="home__content-mobile-header-root"
          onClick={() => setExpandedId(expandedId === employee.id ? null : employee.id)}
        >
          <div className="home__content-mobile-lower-info">
            <h2>
              foto
            </h2>
            <h2>nome</h2>
          </div>
          <h2>
            <Dot />
          </h2>
        </div>

        {employee.map((employee) => (
          <div key={employee.id} className="home__content-mobile-list-item">
            <div
              className="home__content-mobile-header"
              onClick={() => setExpandedId(expandedId === employee.id ? null : employee.id)}
            >
              <div className="home__content-mobile-lower-info">
                <img src={employee.image} alt="" className="home__content-mobile-employee-photo" />

                <span>{employee.name}</span>
              </div>

              <ChevronDown className={`chevron ${expandedId === employee.id ? "expanded" : ""}`} />
            </div>

            {expandedId === employee.id && (
              <div className="home__content-mobile-info-details">
                <div className="home__content-mobile-info-details-grid">
                  <div>
                    <span className="home__content-mobile-info-details-label">Cargo:</span> {employee.job}
                  </div>

                  <div>
                    <span className="home__content-mobile-info-details-label">Data de Admissão:</span> {employee.admission_date}
                  </div>

                  <div>
                    <span className="home__content-mobile-info-details-label">Telefone:</span> {employee.phone}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}