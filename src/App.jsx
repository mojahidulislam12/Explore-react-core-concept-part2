
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert('Button Clicked')
  }
  const handleClick2 = () =>{
    alert('Button clicked2')
  }

  const addFive = (num) =>{
    alert(num + 5);

  }
 

  return (
    <>
      
      <h3>React Core Concept2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('Third Clicked')}}>Third</button>
      <button onClick={()=>addFive(3)}>Four</button>
      
      
    </>
  )
}

export default App
