const Filter = ({ filter, handleFilterChange }) => (
  <div>
    <h1>Phonebook</h1>
    <div>
      filter shown with <input value={filter} onChange={handleFilterChange} />
    </div>
  </div>
)

export default Filter