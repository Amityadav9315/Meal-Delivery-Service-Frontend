import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from './Theme/DarkTheme';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRoute from './Routers/CustomerRoute';

function App() {
  return (
       
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      
      {/* <Navbar/>  */}
    {/*<Home/>   */}
    {/*<RestaurantDetails/> */}  
    {/*<Cart/> */} 
   {/* <Profile/>  */}
   <CustomerRoute/> 
   

  
     </ThemeProvider>

  
  );
}

export default App;
