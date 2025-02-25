import { IEmployeeProps } from "../../../@types/Employee";
import { formatDate } from "../../functions/formatDate";
import { formatTelephone } from "../../functions/formatTelephone";

export const mapperGetEmployee = (data: IEmployeeProps[]) => {
  return data.map((employee) => {
    return {
      ...employee,
      admission_date: formatDate(employee.admission_date),
      phone: formatTelephone(employee.phone),
    };
  }
  );
}