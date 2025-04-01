function criarProduto(produto) {
    let divProduto = document.createElement("div");
    divProduto.classList.add("produto");

    // Exibir a imagem principal
    let imagemPrincipal = document.createElement("img");
    imagemPrincipal.src = produto.items[0].images[0].imageUrl; // A primeira imagem da lista de variações
    imagemPrincipal.alt = produto.productName;
    imagemPrincipal.classList.add("imagem-principal"); // Adiciona uma classe para estilizar se necessário
    divProduto.appendChild(imagemPrincipal);

    // Nome do produto
    let nome = document.createElement("h3");
    nome.innerHTML = produto.productName;
    divProduto.appendChild(nome);

    // Marca do produto
    let marca = document.createElement("p");
    marca.innerHTML = `<strong>Marca:</strong> ${produto.brand}`;
    divProduto.appendChild(marca);

    // Descrição do produto (caso exista)
    let descricao = document.createElement("p");
    let descricaoPrimeiroProduto = produto.items?.[0];
    let descricaoProduto = descricaoPrimeiroProduto?.nameComplete || "Sem descrição disponível";
   
    descricao.innerHTML = `<strong>Descrição:</strong> ${descricaoProduto}`;
    divProduto.appendChild(descricao);

    //Preço
    let preco = document.createElement("p");

    let primeiroItem = produto.items?.[0];
    let primeiroVendedor = primeiroItem?.sellers?.[0];
    let precoComDesconto = primeiroVendedor?.commertialOffer?.Price || "Indisponível";
    let precoNormal = primeiroVendedor?.commertialOffer?.ListPrice || "Indisponível";
    
    preco.innerHTML = `<strong>Preço:</strong> <s>R$ ${precoNormal}</s> <span style="color: red;">R$ ${precoComDesconto}</span>`;
    divProduto.appendChild(preco);

    // Exibir imagens de variação abaixo do nome
    let variaçõesContainer = document.createElement("div");
    variaçõesContainer.classList.add("variacoes");

    produto.items[0].images.forEach(imagem => {
        let imgVariacao = document.createElement("img");
        imgVariacao.src = imagem.imageUrl;
        imgVariacao.alt = imagem.imageLabel;
        imgVariacao.classList.add("imagem-variacao");
        imgVariacao.addEventListener("click", () => {
            imagemPrincipal.src = imagem.imageUrl; // Mudar a imagem principal ao clicar
        });
        variaçõesContainer.appendChild(imgVariacao);
    });

    divProduto.appendChild(variaçõesContainer);

    return divProduto;
}
