import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div classname="App">
      <NavBar />
      <div className='MensajeBienvenida'>
        <ItemListContainer greeting={"Bienvenido"} />
      </div>
    </div>


  )
}

export default App