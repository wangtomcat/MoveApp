import React,{useState,useCallback,useRef} from 'react'
import {useHistory} from 'react-router-dom'
import './style.scss'

const navs=[
  {id:'1',n:'/img/time-n.png',a:'/img/time-a.png',path:'/time'},
  {id:'2',n:'/img/start-n.png',a:'/img/start-a.png',path:'/start'},
  {id:'3',n:'/img/sport-n.png',a:'/img/sport-a.png',path:'/sport'},
  {id:'4',n:'/img/mine-n.png',a:'/img/mine-a.png',path:'/mine'},
]
export default ()=>{
  let history = useHistory();
  const [select, setSelect] = useState('1')
  const imgSrc = useRef();
  const tabAction = useCallback((id,path) => {
    history.push(path)
    setSelect(id)
  },[])
  return(
    <nav className="tabs">
      {
        navs.map(item=>(
          <div className="tab" to={item.path} key={item.id} onClick={()=>{tabAction(item.id,item.path)}}>
          <img ref={imgSrc} className="iconfont" src={ select === item.id ? item.a : item.n}></img>
          </div>
        ))
      }
    </nav>
  )
}
