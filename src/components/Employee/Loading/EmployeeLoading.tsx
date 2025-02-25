import React from "react";

import "./EmployeeLoading.css";

export const EmployeeLoading = () => {
  return (
    <div className="table-container">
      <table className="loading-table">
        <thead>
          <tr>
            {[...Array(3)].map((_, index) => (
              <th key={index} className="loading-header">
                <div className="loading-placeholder"></div>
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {[...Array(5)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(3)].map((_, colIndex) => (
                <td key={colIndex} className="loading-cell">
                  <div className="loading-placeholder"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

