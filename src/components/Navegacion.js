function Navegacion(props) {
    return (
        <nav className="navbar navbar-dark bg-dark barra-navegacion" >
            <a href="#" className="text-white">
                {props.titulo}
                <span className="badge badge-pill badge-light ml-2">
                    {props.lista.length}
                </span>
            </a>
        </nav>
    );
}

export default Navegacion;