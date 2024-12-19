import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Ordersum } from './components/Ordersum';
import { Nomatch } from './components/Nomatch';
import { Product } from './components/Product';
import { Feauture } from './components/Feauture';
import { New } from './components/New';
import { Users} from './components/Users';
import { Userdetails } from './components/Userdetails';
import { Admin } from './components/Admin';
function App() {
  return (
    <>
    <Navbar />
   <Routes>
    <Route path= '*' element= { <Nomatch />}> </Route>
    <Route path='/' element = {<Home />}></Route>
    <Route path='about' element = {<About />} ></Route>
    <Route path='order' element= {<Ordersum />}></Route>
    <Route path='products' element={ <Product />}>
    <Route index element ={ <Feauture />} />
    <Route path='feature' element ={<Feauture />}/>
    <Route path='new' element ={<New />}/>
    </Route>
    <Route path='users' element={ <Users />}> </Route>
    {/* <Route path='users/1' element={ <Userdetails />}> </Route>
    <Route path='users/2' element={ <Userdetails />}> </Route>
    <Route path='users/3' element={ <Userdetails />}> </Route> */}
    {/* <Route path='users/:userId' element={ <Userdetails />}> </Route>
   <Route path='users/Admin' element={ <Admin />}> </Route>  
    </Routes> */}

    <Route path='users' element={ <Users />}>   
    <Route path=':userId' element={ <Userdetails />}> </Route>
    <Route path='admin' element={ <Admin />}> </Route> 
    </Route> 
    </Routes>
 </>
  );
}

export default App;
