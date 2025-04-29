import React, { useState, useEffect } from 'react';
import { Draggable } from '@hello-pangea/dnd';

const TaskCard = ({ task, index, columnKey, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editTags, setEditTags] = useState(task.tags || []); // Initialize with task tags
  const [newTagInput, setNewTagInput] = useState('');
  const [showTagInput, setShowTagInput] = useState(false);
  const [error, setError] = useState('');

  // To sync initial task tags when the task prop changes
  useEffect(() => {
    setEditTitle(task.title);
    setEditTags(task.tags || []); // Ensure tags are updated when task changes
  }, [task]);

  const handleSave = () => {
    // Check if the title is empty
    if (!editTitle.trim()) {
      setError('Title cannot be empty');
      return; // Do not save if title is empty
    }

    setError(''); // Clear error if title is valid

    // Save edited title and tags
    onEdit(columnKey, task.id, editTitle, editTags); 
    setIsEditing(false);
    setShowTagInput(false);
    setNewTagInput('');
  };

  const handleAddTag = () => {
    if (newTagInput.trim() && !editTags.includes(newTagInput.trim())) {
      setEditTags((prev) => [...prev, newTagInput.trim()]); // Add new tag to state
      setNewTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setEditTags((prev) => prev.filter((tag) => tag !== tagToRemove)); // Remove tag from state
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="bg-gray-100 p-4 rounded shadow-md"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {isEditing ? (
            <>
              {/* Edit Title */}
              <input
                type="text"
                className="w-full px-2 py-1 border border-gray-300 rounded mb-2"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)} // Update title as user types
              />
              {error && <p className="text-red-600 text-xs mb-2">{error}</p>} {/* Display error if title is empty */}

              {/* Edit Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {editTags.length > 0 ? (
                  editTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs flex items-center gap-1"
                    >
                      {tag}
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleRemoveTag(tag)} // Remove tag
                      >
                        ×
                      </button>
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 text-xs">No tags added</span>
                )}
              </div>

              {/* New Tag Input */}
              {showTagInput ? (
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    className="px-2 py-1 border rounded w-full"
                    placeholder="Enter new tag"
                    value={newTagInput}
                    onChange={(e) => setNewTagInput(e.target.value)} // Update input value as user types
                  />
                  <button
                    className="bg-blue-500 text-white px-2 rounded"
                    onClick={handleAddTag} // Add new tag
                  >
                    Add
                  </button>
                </div>
              ) : (
                <button
                  className="text-blue-600 text-sm mb-2"
                  onClick={() => setShowTagInput(true)} // Show tag input when + is clicked
                >
                  + Add Tag
                </button>
              )}

              {/* Save and Cancel */}
              <div className="flex justify-end gap-2 mt-2">
                <button className="text-green-600 text-sm" onClick={handleSave}>
                  Save
                </button>
                <button
                  className="text-gray-600 text-sm"
                  onClick={() => {
                    // Revert to original task when cancel is clicked
                    setIsEditing(false);
                    setEditTitle(task.title);
                    setEditTags(task.tags || []);
                    setNewTagInput('');
                    setShowTagInput(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Display Title */}
              <p className="mb-2">{task.title}</p>

              {/* Display Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {task.tags &&
                  task.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
              </div>

              {/* Edit/Delete Buttons */}
              <div className="flex justify-end gap-2">
                <button
                  className="text-blue-600 text-sm"
                  onClick={() => setIsEditing(true)} // Enable edit mode
                >
                  Edit
                </button>
                <button
                  className="text-red-600 text-sm"
                  onClick={() => onDelete(columnKey, task.id)} // Delete task
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
