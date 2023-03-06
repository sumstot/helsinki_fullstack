import {useState, useEffect} from 'react'
import Persons from './components/Persons'
import Search from './components/Search'
import Form from './components/Form'
import Notification from './components/Notification'
import personService from './services/persons'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [notification, setNotification] = useState(null)

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
      setNotification({
        text: `${newName} is already listed`,
        type: 'notification'
      })
      setTimeout(() => {
        setNotification(null)
      }, 5000);
      setNewName('')
    }
    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNotification({
            text: `${returnedPerson.name} was added to the phonebook`,
            type: 'notification-add'
          })
          setTimeout(() => {
            setNotification(null)
          }, 5000);
        })
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (e) => {
  setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value)
    setPersons(filteredPersons)
  }

  const deletePerson = (id) => {

    const person = persons.find(n => n.id === id)
    const confirmDel = window.confirm(`Are you sure you want to delete ${person.name}`)
    if (confirmDel) {
      personService
        .destroy(id)
        .then(returnedPerson => {
          persons.map(person => person.id !== id ? person : returnedPerson)
        })
        setPersons(persons.filter(person => person.id !== id))
        setNotification({
          text: `${person.name} was deleted from the phonebook`,
          type: 'notification'
        })
        setTimeout(() => {
          setNotification(null)
        }, 5000);
    }
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
      <Notification notification={notification} />
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
