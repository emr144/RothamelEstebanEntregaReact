import { useState } from 'react'
import ItemListContainer from './components/ItemListCOntainer'
import Navbar from './components/Navbar'  



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer greeting={"Bienvenidos a la tienda de productos"}></ItemListContainer>


    </>
  )
}

export default App
