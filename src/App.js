import React, {useContext, useReducer} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Shop from './pages/Shop.page'
import Cart from './components/Cart'
import {useStateValue} from './StateStore/StateProvider'
// import Cart from './components/Cart'
// import RecordsContext from './StateStore/context'
// import recordsReducer from './StateStore/reducer'


function App() {
  

  return(
    <BrowserRouter>
        <div className="app">
        <Navbar/>
          <Switch>
            <Route path="/favs">
                <h1>favs</h1>
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/shop">
                <Shop />
            </Route>
            <Route path="/">
                <Header />
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
   
  )
}

export default App;


// <Route exact path="/" component={Shop} />  
// <Route exact path="/shop" component={Shop} />        
// <Route path="/cart" component={Cart} />   


// const initialState = useContext(RecordsContext)
//     const [state, dispatch] = useReducer(recordsReducer, initialState)

//     console.log("APP STATE", state)
//   return (
//     <RecordsContext.Provider value={{state,dispatch}}>
//     <div className="App">
//         <Navbar />
//       <Switch>
       
//       </Switch>
//     </div>
//     </RecordsContext.Provider>

