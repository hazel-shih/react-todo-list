import React, {useState} from "react"
import "./style.css"

function Filter(props) {
  const [isClick, setIsClick] = useState('all')

  function handleClick(e) {
    const { name } = e.target
    setIsClick(name)
    props.handleFilter(name)
    console.log(isClick);
  }

  const styleButtonClick = {
    color: '#F7F8FD',
    background: '#A4B8ED'
  }

  return(
    <div style={props.show ? {} : {display: 'none'}} className="btns">
      <button style={isClick === 'all' ? styleButtonClick : {}} name="all" onClick={handleClick} className="btn">全部</button>
      <button style={isClick === 'unDone' ? styleButtonClick : {}} name="unDone" onClick={handleClick} className="btn">未完成</button>
      <button style={isClick === 'isDone' ? styleButtonClick : {}} name="isDone" onClick={handleClick} className="btn">已完成</button>
    </div>
  )
}

export default Filter