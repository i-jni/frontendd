import { RouterProvider } from 'react-router-dom';
import router from '../service/router';
import './App.css';
import './assets/helpers/style.scss'
import "./assets/helpers/_fonts.scss";


const App = () => {

  return (
        <RouterProvider router={router}>
        <div className="App">
     
        </div>
        </RouterProvider>
  );
};

export default App;
