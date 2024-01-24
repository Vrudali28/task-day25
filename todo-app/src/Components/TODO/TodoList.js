// TodoList.js
import React, { useState } from 'react';

function TodoList(props) {
  const [editMode, setEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState(props.item);
  const [editedItemDis, setEditedItemDis] = useState(props.itemDis);
  const [editedStatus, setEditedStatus] = useState(props.status);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    props.editList(props.index, editedItem, editedItemDis, editedStatus);
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    setEditedItem(e.target.value);
  };

  const handleDisInputChange = (e) => {
    setEditedItemDis(e.target.value);
  };

  const handleStatusChange = (e) => {
    setEditedStatus(e.target.value);
  };

  return (
    <div className='list-body'>
      <li className='list-item' style={{ listStyleType: 'none', padding: 0 }}>
        {editMode ? (
          <>
            <label>Name:</label>
            <input
              type='text'
              value={editedItem}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <label>Description:</label>
            <input
              type='text'
              value={editedItemDis}
              onChange={handleDisInputChange}
            />
            <br />
            <br />
            <label>Status:</label>
            <select value={editedStatus} onChange={handleStatusChange}>
              <option value='completed'>Completed</option>
              <option value='not completed'>Not Completed</option>
            </select>
          </>
        ) : (
          <>
            Name: {props.item}
            <br /> <br />
            Description: {props.itemDis}
            <br />
            Status: {props.status}
          </>
        )}
      </li>

      <div className='action'>
        {editMode ? (
          <button className='save-btn' onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className='edit-btn' onClick={handleEdit}>
            Edit
          </button>
        )}

        <button
          className='delete-btn'
          onClick={() => {
            props.deleteList(props.index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoList;





/*
import React, { useState } from 'react';

function TodoList(props) {
  const [editMode, setEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState(props.item);
  const [editedItemDis, setEditedItemDis] = useState(props.itemDis);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    // Save the edited item and description
    props.editList(props.index, editedItem, editedItemDis);

    // Exit edit mode
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    setEditedItem(e.target.value);
  };

  const handleDisInputChange = (e) => {
    setEditedItemDis(e.target.value);
  };

  return (
    <div className='list-body'>
      <li className='list-item' style={{ listStyleType: 'none', padding: 0 }}>
        {editMode ? (
          <>
            <label>Name:</label>
            <input
              type='text'
              value={editedItem}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <label>Description:</label>
            <input
              type='text'
              value={editedItemDis}
              onChange={handleDisInputChange}
            />
          </>
        ) : (
          <>
            Name: {props.item}
            <br /> <br />
            Description: {props.itemDis}
          </>
        )}
      </li>

      <div className='action'>
        {editMode ? (
          <button className='save-btn' onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className='edit-btn' onClick={handleEdit}>
            Edit
          </button>
        )}

        <button
          className='delete-btn'
          onClick={() => {
            props.deleteList(props.index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoList;*/



