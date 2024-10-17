import logo from './logo.svg';
import './App.css';
import yo from './assets/img/yo.jpg'
function Curriculun(){
  return (
    <div className="curriculum-container">
    <div className="header">
      <h1>Diego Mamani Quispe</h1>
      <h2>Desarrollador de Software</h2>
    </div>
    
    <div className="contact-info">
      <p><strong>Email:</strong> diegomamaniqusipe009@gmail.com</p>
      <p><strong>Teléfono:</strong> 73762336</p>
      <p><strong>Nivel de Inglés:</strong> B2</p>
    </div>
    
    <div className="hobbies">
      <h3>Hobbies</h3>
      <ul>
        <li>Deportes</li>
        <li>Videojuegos</li>
        <li>Series</li>
        <li>Nuevos en Tendencias</li>
      </ul>
    </div>
  </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className= "App-header">
        <div class = "contenedor">
        <img src= {yo} class = "imagen" />
        </div>
        <Curriculun/>
      </header>
    </div>
  );
}

export default App;
