export const filterByGetEmployee = (data, filterByName) => {
  if (!filterByName) {
    return data;
  }
  return data.filter((employee) => employee.name.toLowerCase().includes(filterByName.toLowerCase()));
}