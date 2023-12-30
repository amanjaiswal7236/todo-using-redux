import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  

  return (
    <>
      <h1 className='flex flex-col items-center text-5xl text-white font-bold py-5'>Personal Todo Manager</h1>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App
