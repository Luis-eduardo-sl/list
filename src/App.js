import './App.css';
import MinhaLista from './components/MinhaLista';
import { useState } from "react"


function App() {
const [conselhos, setConselho] = useState([])

const novoConselho = async ()=>{
  const response= await fetch('https://api.adviceslip.com/advice')
  const data = await response.json()
  const conselho = data.slip.advice
  setConselho([...conselhos, conselho])
}

  return (
    <div className="App">
     <h1>Renderizando Lista</h1>
     <MinhaLista itens={conselhos} />
     <button onClick={novoConselho}>Gerar conselho</button>
    </div>
  );
}

export default App;
