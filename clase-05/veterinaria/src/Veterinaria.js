import Perro from './components/Perro';

const perros = [
  {
    nombre : "Perro 1",
    edad : 4,
    sexo : "binario",
    raza : "Razon",
    tamano : "Grande"
  },
  {
    nombre : "Perro 2",
    edad : 1,
    sexo : "no sabemos",
    raza : "Alguna",
    tamano : "Mediano"
  }
]

function Veterinaria() {
  return ( 
	  <div>
      {
        perros.map( perro => <Perro 
          nombre={perro.nombre} 
          edad={perro.edad}
          sexo={perro.sexo}
          raza={perro.raza}
          tamano={perro.tamano} />)
      }
    </div>
  );
}

export default Veterinaria;