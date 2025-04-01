import React, { useState, useEffect } from 'react';
import styles from './Slider.css';

const Slider = ({ imagens }) => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaImagem = () => {
    setIndiceAtual((indiceAnterior) => (indiceAnterior + 1) % imagens.length);
  };

  const imagemAnterior = () => {
    setIndiceAtual((indiceAnterior) => (indiceAnterior - 1 + imagens.length) % imagens.length);
  };

  const irParaImagem = (indice) => {
    setIndiceAtual(indice);
  };

  useEffect(() => {
    const intervalo = setInterval(proximaImagem, 3000); // 3 segundos de intervalo
    return () => clearInterval(intervalo); // Limpar intervalo ao desmontar
  }, []);

  return (
    <div className="sliderContainer">
      <button className="prevBtn" onClick={imagemAnterior}>
        &#10094;
      </button>
      <div className="imageContainer">
        {imagens.map((imagem, indice) => (
          <img
            key={indice}
            className={`image ${indiceAtual === indice ? 'active' : ''}`}
            src={imagem.url}
            alt={imagem.alt}
            style={{
              display: indiceAtual === indice ? 'block' : 'none',
            }}
          />
        ))}
      </div>
      <button className="nextBtn" onClick={proximaImagem}>
        &#10095;
      </button>
      <div className="dots">
        {imagens.map((_, indice) => (
          <button
            key={indice}
            className={`dot ${indiceAtual === indice ? 'active' : ''}`}
            onClick={() => irParaImagem(indice)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
