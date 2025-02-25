// Input: '2019-12-02T00:00:00.000Z'
// Output: '02/12/2019'

export const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR')

  return formattedDate
}
  