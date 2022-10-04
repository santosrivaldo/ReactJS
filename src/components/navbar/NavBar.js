import './NavBar.css'

function NavBar() {
    return (
        <div className="NavBar">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link  active" aria-current="page" href="#">Arquivos</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Gerênciar Ambientes</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Desktops</a></li>
                        <li><a class="dropdown-item" href="#">Gerenciar Desktops</a></li>
                        <li><a class="dropdown-item" href="#"></a></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Armazenamento</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Finânceiro</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;