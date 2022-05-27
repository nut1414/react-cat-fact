import './App.css';
import { useEffect, useState } from 'react';


function CatFactor(){
  const [fact, setFact] = useState('')

  const handleFact = async () => {
    fetch('https://catfact.ninja/fact').then((res)=> {return res.json()})
    .then((data) => {
        setFact(data?.fact)
      })
  }
  useEffect(()=>{
    handleFact()
  }, [])

  return (
    <div className='catfact'>
      <p className='pp'>{fact}</p>
      <button onClick={() => handleFact()}>More Fact!</button>
    </div>
  ) 
}

function Footer(){
  return (
    <footer>
      Made with React. Cat Fact API https://catfact.ninja/
    </footer>
  )
}

function App() {
  useEffect(() => {
    document.title = "Cat Fact";  
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 >Random Cat Fact!</h1>
       <CatFactor/>
      </header>
      <Footer/>
    </div>
  )
}

export default App
