import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cart from '../../components/cart/cart';
import Dashboard from '../../components/dashboard/dashboard';
import OrderPlaced from '../../components/orderPlaced/orderPlaced';
import Lender from '../../pages/Lender/lender'





function RouterTwo() {
    return (
        <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Lender/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/mycart' element={<Cart/>}/>
                <Route path='/orderPlaced' element={<OrderPlaced/>}/>

                 
            </Routes>
        </Router>
    </div>
    );
}

export default RouterTwo;