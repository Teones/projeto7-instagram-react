export default function Stories () {
    const stories = [
        { imagem: "9gag.svg", usuario: "9gag" },
        { imagem: "meowed.svg", usuario: "meowed" },
        { imagem: "barked.svg", usuario: "barked" },
        { imagem: "nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
        { imagem: "wawawicomics.svg", usuario: "wawawicomics" },
        { imagem: "respondeai.svg", usuario: "respondeai" },
        { imagem: "filomoderna.svg", usuario: "filomoderna" },
        { imagem: "memeriagourmet.svg", usuario: "memeriagourmet" },
    ]

    return (
        <div class="stories">
            {stories.map((story) => <Story imagem = {story.imagem} usuario = {story.usuario} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story ({imagem, usuario}) {
    return (
        <div class="story">
            <div class="imagem">
                <img src= {`assets/img/${imagem}`} />   
            </div>
            <div class="usuario">
                {usuario}
            </div>
        </div>
    )
}

