
import './App.css'
import Prateleira from './models/Prateleira'
import { produtos } from './data/produtos'

function App() {

  return (
    <>
    <Prateleira produtos={produtos}/>
    </>
  )
}

export default App
