async function main() { 
    try 
    {
        let response = await fetch("https://desafio.xlow.com.br/search");
        let produtos = await response.json();
        
        //console.log("Lista de produtos:", produtos); // Para depuracao

        let container = document.getElementById("array-produtos");
        if (!container) {
            console.error("Elemento #array-produtos não encontrado!");
            return;
        }

        for (let produto of produtos) {
            let detalhesResponse = await fetch(`https://desafio.xlow.com.br/search/${produto.productId}`);
            let detalhesProdutoArray = await detalhesResponse.json();

            if (!Array.isArray(detalhesProdutoArray) || detalhesProdutoArray.length === 0) {
                console.error(`Erro: Nenhum detalhe encontrado para o produto ${produto.productId}`);
                continue;
            }

            let detalhesProduto = detalhesProdutoArray[0]; // Primeiro item do array
            console.log(`Detalhes do produto ${produto.productId}:`, detalhesProduto);

            let produtoHTML = criarProduto(detalhesProduto);
            container.appendChild(produtoHTML);
        }

        //funcao do botao de layout

        let botaoLayout = document.getElementById("toggle-layout");
        botaoLayout.addEventListener("click", mudarLayout);

    } catch (error) {
        console.error("Erro ao consumir API:", error);
    }
}

main();
