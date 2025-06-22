import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';

function App() {
  return (
       
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
     
     <Navbar/>
    {/* <Home/> */}
    <RestaurantDetails/>
     </ThemeProvider>

  
  );
}

export default App;
