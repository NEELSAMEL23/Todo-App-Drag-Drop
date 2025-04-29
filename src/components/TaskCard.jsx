import React, { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';

const TaskCard = ({ task, index, columnKey, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    onEdit(columnKey, task.id, editText);
    setIsEditing(false);
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="bg-gray-100 p-4 rounded shadow-md flex justify-between items-start gap-2"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex-1">
            {isEditing ? (
              <input
                type="text"
                className="w-full px-2 py-1 border border-gray-300 rounded"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <p>{task.text}</p>
            )}
          </div>
          <div className="flex gap-1">
            {isEditing ? (
              <button
                className="text-green-600 text-sm"
                onClick={handleSave}
              >
                Save
              </button>
            ) : (
              <button
                className="text-blue-600 text-sm"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            )}
            <button
              className="text-red-600 text-sm"
              onClick={() => onDelete(columnKey, task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;