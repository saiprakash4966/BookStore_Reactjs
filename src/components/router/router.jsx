import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Lender from '../../pages/Lender/lender'
import BookDetails from '../books/bookDetails'
import Dashboard from '../dashboard/dashboard'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'


function RouterTwo() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Lender/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='bookdetails' element={<BookDetails/>}/>
                 
            </Routes>
        </Router>
    </div>
  )
}

export default RouterTwo