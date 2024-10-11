import { useSelector } from 'react-redux';
import './App.css';
import Layout from "./Pages/Layout"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const language = useSelector((state)=>state.language.lang)
  console.log(language);
  return (
    <div className="App" dir={`${language==='ar'?'rtl':'ltr'}`}>

      <Layout />

    </div>
  );
}

export default App;
