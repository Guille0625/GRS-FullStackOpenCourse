const Persons = ({ personsToShow }) => (
    <div>
      <h1>Numbers</h1>
      <div>
        {personsToShow.map((person, index) => (
          <div key={index}>{person.name} {person.number}</div>
        ))}
      </div>
    </div>
)

export default Persons