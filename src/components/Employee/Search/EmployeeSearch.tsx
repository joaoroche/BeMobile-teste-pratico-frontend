import { Search } from "lucide-react"

import './EmployeeSearch.css'

export const EmployeeSearch = ({ searchQuery, setSearchQuery }: {
  searchQuery: string,
  setSearchQuery: (query: string) => void
}) => {

  return (
    <div className="employee__search-container">
      <Search className="employee__search-icon" />

      <input
        type="text"
        placeholder="Pesquisar por nome"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="employee__search-input"
      />
    </div>
  )
}