import {useState} from 'react'
import Person from './components/Person'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName
    }
    const checkPerson = persons.find(person => person.name.toLowerCase()=== personObject.name.toLowerCase())
    if (checkPerson) {
      alert(newName + 'is already listed')
      setNewName('')
    }
    else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

   const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
   }

   const sameName =(persons, name)=> {

   }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
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
