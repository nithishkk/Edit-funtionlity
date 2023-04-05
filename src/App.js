import React,{ useState,useCallback } from 'react';
const data =[
  {id:1,name:"nithish"},
  // {id:2,name:"recat"},
  // {id:3,name:"java"},
  // {id:4,name:"javascriot"},
  // {id:5,name:"python"},
]


const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  const [editing, setEditing] = useState(false);
  const[name,setName]=useState('')
  const[dev,setDev]=useState('nithish')
  // ...
  // const handleEditing = () => {
  //   setEditing(true);

  // };
  const handleEditing= useCallback(
    () => {
      setEditing(true);
      // setEditing(name);
    },
    [],)
    const hange= useCallback(
      (e,val) => {
        console.log(val,'val')
        setDev(e.target.value)
      },
      [],)
  return (
    
      <div >
        {data?.map((item,index)=>{
          return 
        })}
        {editing && (
          <input type='text' value={dev} onChange={(e,value)=>hange(e,value)}/>

        )}
        <button onClick={handleEditing}>Edit</button>
      
  {name}
      </div>
   
  );
};
export default TodoItem;