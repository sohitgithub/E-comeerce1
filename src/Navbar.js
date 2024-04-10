import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Electronics from './Electronics'
import Jwellery from './Jwellery'
import Mcloths from './Mcloths'
import WmanClothe from './WmanClothe'
import Item from './Item'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/Jwellery">Jwellery</NavLink>
            </li>
            <li>
              <NavLink to="/electronics">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/mCloth">Men Cloth</NavLink>
            </li>
            <li>
              <NavLink to="/wcloth">Woman cloth</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/electronics' element={<Electronics></Electronics>}></Route>
            <Route path='/Jwellery' element={<Jwellery></Jwellery>}></Route>
            <Route path='/mCloth' element={<Mcloths></Mcloths>}></Route>
            <Route path='/wcloth' element={<WmanClothe></WmanClothe>}></Route>
            <Route path='/Item' element={<Item></Item>}></Route>
        </Routes>
      </div>
    </nav>
  )
}

export default Navbar