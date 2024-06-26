import { useEffect, useState } from 'react';
import './App.css';
import Input from './Input';
import Left from './Left';
import Right from './Right';

function App() {
  const [todo, setTodo] = useState([]);
  const [deledata, SetDeletdata] = useState([]);

  useEffect(() => {
    const IsDeledata = localStorage.getItem("deledata");
    const IsTodo = localStorage.getItem("todo");
    if (IsDeledata != undefined) {
      SetDeletdata(JSON.parse(IsDeledata));
    }
    if (IsTodo != undefined) {
      setTodo(JSON.parse(IsTodo));
    }
  }, []);

  useEffect(() => {
    if (deledata.length !== 0) {
      localStorage.setItem("deledata", JSON.stringify(deledata));
    }
    if (todo.length !== 0) {
      localStorage.setItem("todo", JSON.stringify(todo));
    }
  }, [deledata, todo]);

  const addItem = (item) => {
    setTodo([...todo, item]);
  };

  const removehandler = (index, olddata) => {
    SetDeletdata([...deledata, olddata]);
    const newData = todo.filter((itm, ind) => {
      return ind !== index;
    });
    setTodo(newData);
  };

  const repetdata = (rvalue, rindex) => {
    setTodo([...todo, rvalue]);
    const lidata = deledata.filter((ri, rn) => {
      return rn !== rindex;
    });

 
    if (lidata.length == 0) {
      localStorage.removeItem("deledata");
    } else {
      localStorage.setItem("deledata", JSON.stringify(lidata));
    }

    SetDeletdata(lidata);
  };

  return (
    <div className='container'>
      <Input itemhandler={addItem} />
      <Left data={todo} remove={removehandler} />
      <Right removedata={deledata} repeatfun={repetdata} />
    </div>
  );
}

export default App;
