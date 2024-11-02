import { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    console.log(`IMC calculado: ${imcCalculado}`); 
    setImc(imcCalculado);
    classificarIMC(parseFloat(imcCalculado));
  };
  
  const classificarIMC = (imc) => {
    console.log(`IMC recebido para classificação: ${imc}`);
    let resultado = '';
  
    if (imc < 18.5) {
      resultado = 'Baixo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado = 'Eutrofia (Peso adequado)';
    } else if (imc >= 25 && imc <= 29.9) {
      resultado = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
      resultado = 'Obesidade Grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
      resultado = 'Obesidade Grau 2';
    } else if (imc >= 40) {
      resultado = 'Obesidade Extrema';
    }
  
    console.log(`Classificação resultante: ${resultado}`);
    setClassificacao(resultado);
  };  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de IMC</h1>
      </header>
      
      <main>
        <div className="form-group">
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
  
        <div className="form-group">
          <label>Altura (cm):</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        
        <button onClick={calcularIMC}>Calcular IMC</button>
  
        {imc && (
          <div>
            <h2>Seu IMC: {imc}</h2>
            {classificacao && (
              <h3>Classificação: {classificacao}</h3>
            )}
          </div>
        )}
      </main>
      
      <footer>
        <p>Desenvolvido por Gabriel Macedo</p>
      </footer>
    </div>
  );
}

export default App;
