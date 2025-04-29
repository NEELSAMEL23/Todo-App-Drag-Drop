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
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceTasks = Array.from(tasks[source.droppableId]);
    const [movedTask] = sourceTasks.splice(source.index, 1);
    const destinationTasks = Array.from(tasks[destination.droppableId]);
    movedTask.status = destination.droppableId;
    destinationTasks.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceTasks,
      [destination.droppableId]: destinationTasks,
    });
  };

  const handleDelete = (column, id) => {
    const updated = { ...tasks };
    updated[column] = updated[column].filter((task) => task.id !== id);
    setTasks(updated);
  };

  const handleEdit = (column, id, newText) => {
    const updated = { ...tasks };
    updated[column] = updated[column].map((task) =>
      task.id === id ? { ...task, text: newText } : task
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
