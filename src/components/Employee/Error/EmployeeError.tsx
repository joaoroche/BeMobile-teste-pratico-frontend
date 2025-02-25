import React from "react";

import "./EmployeeError.css";

const ENUM_ERROR: { [key: string]: string } = {
  'Failed to fetch': 'Não foi possível carregar os dados. Por favor, tente novamente.',
  'Network Error': 'Não foi possível carregar os dados. Por favor, verifique sua conexão com a internet.',
  '404': 'Não foi possível carregar os dados. Por favor, tente novamente.',
};

export const EmployeeError = ({ message }: {
  message?: string;
}) => {
  return (
    <div className="error-container">
      <p className="error-message">
        {
          message ? ENUM_ERROR[message] || message : 'Não foi possível carregar os dados. Por favor, tente novamente.'
        }</p>
    </div>
  );
};

