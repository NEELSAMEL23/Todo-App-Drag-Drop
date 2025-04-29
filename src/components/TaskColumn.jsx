import React from 'react';
import TaskCard from './TaskCard';
import { Droppable } from '@hello-pangea/dnd';

const TaskColumn = ({ title, tasks, columnKey, onDelete, onEdit }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow w-full sm:w-1/3 flex flex-col h-[80vh]">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <Droppable droppableId={columnKey}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex-1 overflow-y-auto space-y-3 pr-2"
          >
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id} // Ensure unique key is assigned
                task={task}
                index={index}
                columnKey={columnKey}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskColumn;
