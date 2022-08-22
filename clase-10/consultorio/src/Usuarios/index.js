function ListaUsuarios(props){

    return(
        <ul>
            {props.usuarios.map((usuario) => <li>{usuario.nombre} {usuario.apellido} - Numero de turno : {usuario.numeroConsulta}</li>)}        
        </ul>
    )
}

export default ListaUsuarios;