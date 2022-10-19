
import "./App.css"
import DownloadApp from "./layout/footer/DownloadApp";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Main from './layout/main/Main'
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Main></Main>
     <DownloadApp></DownloadApp>
     <Footer></Footer>
    </div>
  );
}

export default App;
