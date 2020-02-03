import React, { Suspense,lazy } from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'


import Tabs from './components/Tabs/Tabs'
import Loading from './components/Loading/Loading'


const Login = lazy(()=>import('./pages/login/login'))
const Time = lazy(()=>import('./pages/time/time/Time'))
const Start = lazy(()=>import('./pages/start/start/Start'))
const Sport = lazy(()=>import('./pages/sport/sport/Sport'))
const Data = lazy(()=>import('./pages/data/data/Data'))
const Mine = lazy(()=>import('./pages/mine/mine/Mine'))
const NotFound = lazy(()=>import('./pages/common/NotFound/NotFound'))


 const App =()=>{
    return (
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>

          {/* 根页面 */}
          <Switch>
            <Route path="/" exact render={()=>{
              return <Redirect to="/time"/>
            }}/>
            <Route path="/login" component={Login}/>
            <Route path="/time" component={Time}/>
            <Route path="/start" component={Start}/>
            <Route path="/sport" component={Sport}/>
            <Route path="/data" component={Data}/>
            <Route path="/mine" component={Mine}/>
            <Route component={NotFound}/>
          </Switch>
            
            {/* 子页面 */}
            {/* <Route path="/mine/info" component={Info}/> */}


          <Tabs/>
        </Suspense>
      </BrowserRouter>
    )
  
}
export default App
