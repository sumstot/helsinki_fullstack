import {useState} from 'react'
import Person from './components/Person'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-123456', id: 1}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    const checkPerson = persons.find(person => person.name.toLowerCase() === personObject.name.toLowerCase())
    if (checkPerson) {
      alert(newName + 'is already listed')
      setNewName('')
    }
    else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (e) => {
  console.log(e.target.value)
  setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.name} person={person} />
          )}
      </ul>
    </div>
  );
}

export default App;
