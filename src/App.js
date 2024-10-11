import './App.css';
import Conteudo from './components/conteudo';
import Header from './components/header';
import QuemSomos from './components/quemSomos';
function App() {
  return (
    <div className="app">
  <Header/>
  <QuemSomos/>
  <Conteudo/>
</div>
  );
}

export default App;
