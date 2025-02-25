export const formatTelephone = (input: string) => {
  const str = input.toString();
  
  const countryCode = str.slice(0, 2);
  const areaCode = str.slice(2, 4);
  const firstPart = str.length === 13 ? str.slice(4, 8) : str.slice(4, 9);
  const secondPart = str.slice(-4);
  
  return `(${countryCode}) ${areaCode} ${firstPart}-${secondPart}`;
}