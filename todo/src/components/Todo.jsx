import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Todo.css'

export default class Todo extends React.Component{
    constructor(){
        super()
        this.state={
            textValue:"",
            todolist:[]
        }
    }
    render() {
        let {textValue,todolist}=this.state
        let handleChange = (e) => {
    this.setState({ textValue: e.target.value });
};
    let handleClick=()=>{
        this.setState({todolist:[...todolist,textValue]})
        this.setState({textValue:""})
    }
    let handleUpdate=(index)=>{
        let nextValue=prompt("Enter new task")
        let updatedArr=todolist.map((el,i)=>{
            if(i==index){
                return nextValue
            }
            return el
        })

        this.setState({todolist:updatedArr})
    }
    let handleDelete=(index)=>{
        let updatedArr=todolist.filter((el,i)=>i!=index
        )

        this.setState({todolist:updatedArr})
    }

      return (
        <> 
        <div className="container">
        <div className="addTodo">
            <input type="text" value={textValue} onChange={handleChange} placeholder='Enter Task Here' />
            <button  onClick={handleClick}>ADD</button>
        </div>
        <div className='list'>
            {todolist.map((el,i)=>(
                <div key={i} className='task'>
                    <div className='taskname'>{el}</div>
                    <div className="icons">
                    <EditIcon 
 onClick={()=>handleUpdate(i)}/>
                    <DeleteIcon onClick={()=>handleDelete(i)}/>
                    </div>
                    </div>
            
            ))}
        </div>
        </div>
        </>
      )
    }
}

