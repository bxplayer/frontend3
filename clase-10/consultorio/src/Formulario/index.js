function Formulario(props){
   return(

    <form onSubmit={props.onAgendar}>
        <p>
            Ingrese su nombre : <input type="text" name="nombre" />
        </p>
        <p>
            Ingrese su apellido : <input type="text" name="apellido" />
        </p>
        <input type="submit" value="Agendar" />
    </form>

   )
}

export default Formulario;