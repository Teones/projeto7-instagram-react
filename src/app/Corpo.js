import Stories from "./Stories"
import Posts from "./Posts"
import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function Corpo () {
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />
        </div>
    )
}

function Esquerda () {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}


function Sidebar () {
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
            
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}