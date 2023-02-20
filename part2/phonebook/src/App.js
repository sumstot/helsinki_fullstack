import {useState, useEffect} from 'react'
import Persons from './components/Persons'
import Search from './components/Search'
import Form from './components/Form'
import personService from './services/persons'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    const checkPerson = persons.find(person => person.name.toLowerCase() === personObject.name.toLowerCase())
    if (checkPerson) {
      alert(newName + 'is already listed')
      setNewName('')
    }
    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
      setNewName('')
      setNewNumber('')
    }
  }

  const deletePerson = (e) => {
    e.preventDefault()
    console.log(e)
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
      <Persons persons={persons} deletePerson={deletePerson} />
    </div>
  );
}

export default App;
