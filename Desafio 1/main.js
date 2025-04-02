async function main() { 
    try 
    {
        let response = await fetch("https://desafio.xlow.com.br/search");
        let produtos = await response.json();

        
        //console.log("Lista de produtos:", produtos); 

        let container = document.getElementById("array-produtos");
        if (!container) {
            console.error("Elemento #array-produtos não encontrado!");
            return;
        }

        container.dataset.layout = "4"; 

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


        configurarToggleLayout();
        atualizarContador(); 
    } catch (error) {
        console.error("Erro ao consumir API:", error);
    }
}

    function configurarToggleLayout() {
        let container = document.getElementById("array-produtos");
        let botaoToggle = document.getElementById("toggle-layout");

        function aplicarLayoutCorreto() {
            let larguraTela = window.innerWidth;

            if (larguraTela < 768) {
                // Mobile: Alternar entre 1 e 2 produtos por linha
                container.style.gridTemplateColumns = container.dataset.layout === "1"
                    ? "repeat(2, 1fr)"  // Alterna para 2 colunas
                    : "repeat(1, 1fr)"; // Alterna para 1 coluna
                container.dataset.layout = container.dataset.layout === "1" ? "2" : "1";
            } else {
                // Desktop: Alternar entre 4 e 5 produtos por linha
                container.style.gridTemplateColumns = container.dataset.layout === "4"
                    ? "repeat(5, 1fr)"  // Alterna para 5 colunas
                    : "repeat(4, 1fr)"; // Alterna para 4 colunas
                container.dataset.layout = container.dataset.layout === "4" ? "5" : "4";
            }
        }
        console.log(window.innerWidth); // teste pra ver qual tamanho da tela vc ta usando

        botaoToggle.addEventListener("click", aplicarLayoutCorreto);


        window.addEventListener("resize", aplicarLayoutCorreto);
    }

    function atualizarContador() {
        let totalProdutos = document.querySelectorAll("#array-produtos .produto").length;
        document.getElementById("contador-produtos").textContent = `Produtos exibidos: ${totalProdutos}`;
    }
    


    


main();
