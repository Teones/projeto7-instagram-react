export default function Usuarios () {
    const usuarios = [{imagem: "catanacomics.svg", usuario: "catanacomics", nome: "Catana"}]
    return (
        <div>
            {usuarios.map((usuario) => <Usuario imagem = {usuario.imagem} usuario = {usuario.usuario} nome = {usuario.nome} />)}
        </div>
    )
}

function Usuario (imagem, usuario, nome) {
    return (
        <div class="usuario">
            <img src={`assets/img/catanacomics.svg`} />
            <div class="texto">
                <strong>catanacomics</strong>
                Catana
            </div>
        </div>
    )
}