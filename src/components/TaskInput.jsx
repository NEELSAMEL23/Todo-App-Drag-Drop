import React, { useState } from 'react';

const tagOptions = ['HTML', 'CSS', 'JavaScript', 'React'];

const TaskInput = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState('todo');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = {
      id: Date.now().toString(), // Unique ID based on timestamp
      title,
      tags,
      status,
    };
    addTask(newTask);
    setTitle('');
    setTags([]);
    setStatus('todo');
  };

  const toggleTag = (tag) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6"
    >
      <input
        type="text"
        placeholder="Enter your task"
        className="flex-1 p-2 rounded border"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex gap-2 flex-wrap">
        {tagOptions.map((tag) => (
          <button
            type="button"
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`text-sm px-2 py-1 rounded-full border transition-all ${
              tags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 rounded border"
      >
        <option value="todo">To do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        + Add Task
      </button>
    </form>
  );
};

export default TaskInput;
