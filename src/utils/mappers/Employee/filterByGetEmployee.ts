import { IEmployeeProps } from "../../../@types/Employee";

export const filterByGetEmployee = (data: IEmployeeProps[], filterByName: string) => {
  if (!filterByName) {
    return data;
  }
  return data.filter((employee) => employee.name.toLowerCase().includes(filterByName.toLowerCase()));
}