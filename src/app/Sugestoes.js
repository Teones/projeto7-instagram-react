export default function Sugestoes () {
    const sugestoes = [
        {imagem: "bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você"},
        {imagem: "chibirdart.svg", nome: "chibirdart", razao: "Segue você"},
        {imagem: "razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram"},
        {imagem: "adorable_animals.svg", nome: "adorable_animals", razao: "Segue você"},
        {imagem: "smallcutecats.svg", nome: "smallcutecats", razao: "Segue você"}
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao) => <Sugestao imagem = {sugestao.imagem} nome = {sugestao.nome} razao = {sugestao.razao} />)}
            
            <div class="seguir">Seguir</div>

        </div>
    )
}

function Sugestao ({imagem, nome, razao}) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${imagem}`} />
                <div class="texto">
                    <div class="nome">{nome}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>
        </div>
    )
}