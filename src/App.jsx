import { Suspense } from 'react'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Posts from './Posts'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

// const fetchPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return res(json())
// }

function App() {

  function handleClick() {
    alert('button click')
  }

  const handleClick2 = () => {
    alert('Click Button 2')
  }
  const handleToFive = (num) => {
    alert(num + 3)
  }

  return (
    <>
      <h3>React Core Concept</h3>
      
      <Posts></Posts>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Team></Team>
      <Counter></Counter>
      
      <button onClick={handleClick}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('Button3') }}>Button 3</button>
      <button onClick={() => handleToFive(6)}>Button 4</button>
    </>
  )
}

export default App
