import React from 'react';
import TaskColumn from './TaskColumn';
import { DragDropContext } from '@hello-pangea/dnd';

const TaskBoard = ({ tasks, setTasks }) => {
  const statuses = [
    { key: 'todo', title: '🎯 To do' },
    { key: 'doing', title: '✨ Doing' },
    { key: 'done', title: '✅ Done' },
  ];

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return; // Dropped outside

    const sourceColumn = source.droppableId;
    const destinationColumn = destination.droppableId;

    // If the task is moved within the same column and index, don't update
    if (
      sourceColumn === destinationColumn &&
      source.index === destination.index
    ) {
      return;
    }

    // Clone the tasks to avoid mutation
    const newTasks = { ...tasks };

    // Find the task that was dragged
    const task = newTasks[sourceColumn][source.index];

    // Remove the task from the source column
    newTasks[sourceColumn].splice(source.index, 1);

    // Add the task to the destination column
    task.status = destinationColumn;
    newTasks[destinationColumn].splice(destination.index, 0, task);

    // Update the state with the new task order
    setTasks(newTasks);
  };

  const handleDelete = (column, id) => {
    const updated = { ...tasks };
    updated[column] = updated[column].filter((task) => task.id !== id);
    setTasks(updated);
  };

  const handleEdit = (column, id, newTitle, newTags) => {
    const updated = { ...tasks };
    updated[column] = updated[column].map((task) =>
      task.id === id ? { ...task, title: newTitle, tags: newTags } : task
    );
    setTasks(updated);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col sm:flex-row gap-4 h-[80vh]">
        {statuses.map(({ key, title }) => (
          <TaskColumn
            key={key}
            title={title}
            tasks={tasks[key]}
            columnKey={key}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
