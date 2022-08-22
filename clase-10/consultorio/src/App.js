import { useState } from 'react' 
import Formulario from './Formulario/index'
import Usuarios from './Usuarios/index'



function App() {

  const [usuarios, setUsuario] = useState([]);


  function agendar(event){
    event.preventDefault();
    const nombre = event.target.nombre.value;
    const apellido = event.target.apellido.value;
    const numeroConsulta = Math.floor(Date.now() / 1000);

    setUsuario([{nombre,apellido,numeroConsulta},  ...usuarios]);
    event.target.reset();
  }


  return (
    <div className="App">
      <Formulario onAgendar={agendar}/>
      <Usuarios usuarios={usuarios}  />
    </div>
  );
}

export default App;
