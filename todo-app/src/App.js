// app.js
import { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './Components/TODO/TodoInput';
import TodoList from './Components/TODO/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [listTodoDiscription, setListDiscriptionTodo] = useState([]);
  const [listTodoStatus, setListTodoStatus] = useState([]);

  useEffect(() => {
    // Load data from local storage on component mount
    const storedList = JSON.parse(localStorage.getItem('todoList')) || [];
    const storedDiscriptionList = JSON.parse(localStorage.getItem('todoDiscriptionList')) || [];
    const storedStatusList = JSON.parse(localStorage.getItem('todoStatusList')) || [];

    setListTodo(storedList);
    setListDiscriptionTodo(storedDiscriptionList);
    setListTodoStatus(storedStatusList);
  }, []);

  const addList = (inputText, discriptionText, status = 'not completed') => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
      setListDiscriptionTodo([...listTodoDiscription, discriptionText]);
      setListTodoStatus([...listTodoStatus, status]);
    }
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);

    let newListTodoDiscription = [...listTodoDiscription];
    newListTodoDiscription.splice(key, 1);

    let newListTodoStatus = [...listTodoStatus];
    newListTodoStatus.splice(key, 1);

    setListTodo(newListTodo);
    setListDiscriptionTodo(newListTodoDiscription);
    setListTodoStatus(newListTodoStatus);
  };

  const editList = (index, updatedItem, updatedItemDis, updatedStatus) => {
    const newListTodo = [...listTodo];
    const newListTodoDiscription = [...listTodoDiscription];
    const newListTodoStatus = [...listTodoStatus];

    newListTodo[index] = updatedItem;
    newListTodoDiscription[index] = updatedItemDis;
    newListTodoStatus[index] = updatedStatus;

    setListTodo(newListTodo);
    setListDiscriptionTodo(newListTodoDiscription);
    setListTodoStatus(newListTodoStatus);
  };

  const filterByStatus = (status) => {
  let filteredList = [];
  if (status === 'all') {
    // If status is 'all', display all tasks
    filteredList = listTodoStatus.map((_, index) => ({
      item: listTodo[index],
      discription: listTodoDiscription[index],
      status: listTodoStatus[index],
    }));
  } else {
    // Filter tasks based on the selected status
    filteredList = listTodoStatus
      .map((_, index) => ({
        item: listTodo[index],
        discription: listTodoDiscription[index],
        status: listTodoStatus[index],
      }))
      .filter(task => task.status === status);
  }

  // Update the state only with the filtered data
  setListTodo([...filteredList.map(task => task.item)]);
  setListDiscriptionTodo([...filteredList.map(task => task.discription)]);
  setListTodoStatus([...filteredList.map(task => task.status)]);
};


  useEffect(() => {
    // Save data to local storage whenever the list is updated
    localStorage.setItem('todoList', JSON.stringify(listTodo));
    localStorage.setItem('todoDiscriptionList', JSON.stringify(listTodoDiscription));
    localStorage.setItem('todoStatusList', JSON.stringify(listTodoStatus));
  }, [listTodo, listTodoDiscription, listTodoStatus]);

  return (
    <div className="main-container">
      <div className='input-container'>
        <h1 className='app-heading'>My TODO</h1>
        <TodoInput addList={addList} />
      </div>
      <div className='filter-container'>
        <label>Filter by Status:</label>
        <select onChange={(e) => filterByStatus(e.target.value)}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='not completed'>Not Completed</option>
        </select>
      </div>
      <div className='center-container'>
        {listTodo.map((listItem, i) => (
          <TodoList
            key={i}
            index={i}
            item={listItem}
            itemDis={listTodoDiscription[i]}
            status={listTodoStatus[i]}
            deleteList={deleteListItem}
            editList={editList}
          />
        ))}
      </div>
    </div>
  );
}

export default App;



