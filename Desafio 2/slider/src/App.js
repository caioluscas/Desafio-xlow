import logo from './logo.svg';
import Slider from './Slider.js';
import styles from './App.css'; 

// Array de imagens com URL, ALT e LINK
const imagens = [
  {
    url: "https://fashionbiju.vteximg.com.br/arquivos/ids/177692/1-2-.png?v=638017008252630000",
    alt: "Maquiagem 1",
    link: "https://fashionbiju.vteximg.com.br/arquivos/ids/177692/1-2-.png?v=638017008252630000",
  },
  {
    url: "https://fashionbiju.vteximg.com.br/arquivos/ids/177693/2-2-.png?v=638017008426100000",
    alt: "Maquiagem 2",
    link: "https://fashionbiju.vteximg.com.br/arquivos/ids/177693/2-2-.png?v=638017008426100000",
  },
  {
    url: "https://fashionbiju.vteximg.com.br/arquivos/ids/177694/3-1-.png?v=638017009487200000",
    alt: "Maquiagem 3",
    link: "https://fashionbiju.vteximg.com.br/arquivos/ids/177694/3-1-.png?v=638017009487200000",
  },
  {
    url: "https://fashionbiju.vteximg.com.br/arquivos/ids/177695/4-1-.png?v=638017009648770000",
    alt: "Maquiagem 4",
    link: "https://fashionbiju.vteximg.com.br/arquivos/ids/177695/4-1-.png?v=638017009648770000",
  }
];

function App() {
  return (
    <div>
      <h1>Slider de Imagens</h1>
      <Slider imagens={imagens} />
    </div>
  );
}

export default App;
