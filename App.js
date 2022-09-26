import { Props } from './Props'

function App() {
  const users = [
    {
      id: 1,
      name: 'Mari',
      age: 19
    },
    {
      id: 2,
      name: 'Leqso',
      age: 13
    },
    {
      id: 3,
      name: 'Nika',
      age: 14
    },
    {
      id: 4,
      name: 'Luka',
      age: 23
    },
    {
      id: 5,
      name: 'Alex',
      age: 33
    },
    {
      id: 6,
      name: 'Jhon',
      age: 54
    },
    {
      id: 7,
      name: 'Poor',
      age: 22
    },
    {
      id: 8,
      name: 'Tazo',
      age: 34
    },
    {
      id: 9,
      name: 'Demna',
      age: 20
    },
    {
      id: 10,
      name: 'Max',
      age: 14
    }
  ]

  return (
    <div className='App'>
      <Props users={users} />
    </div>
  )
}

export default App
