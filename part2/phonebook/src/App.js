import {useState} from 'react'
import Persons from './components/Persons'
import Search from './components/Search'
import Form from './components/Form'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-123456', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

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

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value)
    setPersons(filteredPersons)
  }

  const filteredPersons = persons.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(newSearch.toLowerCase())
      );
    }
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Search value={newSearch} onChange={handleSearchChange} />
      <h3>
        Add a new contact
      </h3>
      <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
}

export default App;
