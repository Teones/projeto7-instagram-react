export default function Posts () {
    const posts = [
        {
        usuario: {
            nome: "meowed",
            imagem: "meowed.svg",
            },
        conteudo: "gato-telefone.svg",
        quemDeuLike: {
            amigo: "respondeai",
            imagemAmigo: "respondeai.svg",
            quantidade: "101.523"
        }
        },
        {
        usuario: {
            nome: "barked",
            imagem: "barked.svg",
        },
        conteudo: "dog.svg",
        quemDeuLike: {
            amigo: "adorable_animals",
            imagemAmigo: "adorable_animals.svg",
            quantidade: "99.159"
        }
        }
    ]
    return (
        <div class="posts">
          {posts.map((post) => (
            <Post usuario={post.usuario} conteudo={post.conteudo} quemDeuLike={post.quemDeuLike} />
          ))}
        </div>
      );
}


function Post ({usuario:{nome, imagem}, conteudo, quemDeuLike: {amigo, imagemAmigo, quantidade}}) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={`assets/img/${imagem}`}/>
                    {nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={`assets/img/${conteudo}`}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src={`assets/img/${imagemAmigo}`}/>
                    <div class="texto">
                        Curtido por <strong>{amigo}</strong> e <strong>outras {quantidade}pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

