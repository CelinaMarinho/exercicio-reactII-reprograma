
import './App.css';
import Title from './components/Title';
import Rotas from './routes/Rotas'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Subtitle from './components/Subtitle';
import MeusRepositorios from './components/MeusRepositorios'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Title texto="Meu Segundo Projeto React do Zero" />
      <Subtitle texto="Meus repositórios" />
      <MeusRepositorios />
      
      
      
  
      </header>
    </div>
  );
}

export default App;
