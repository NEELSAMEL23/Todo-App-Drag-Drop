🛠️ Technologies Used

React (v19)

Tailwind CSS for styling

@hello-pangea/dnd for drag-and-drop

📁 Folder Structure

├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── TaskBoard.jsx
│   │   ├── TaskColumn.jsx
│   │   └── TaskCard.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── tailwind.config.js

🧩 Component Overview

1. TaskBoard.jsx

Manages all column states and task data

Handles drag-and-drop logic

Manages delete and edit handlers

2. TaskColumn.jsx

Renders tasks of a specific status

Supports vertical scrolling if content overflows

3. TaskCard.jsx

Displays individual task card

Includes Edit and Delete buttons

Inline editing enabled

📦 Installation

Clone the repository:

git clone https://github.com/your-username/drag-drop-task-board.git
cd drag-drop-task-board

Install dependencies:

npm install

If you face React version compatibility issues with react-beautiful-dnd, use:

npm install @hello-pangea/dnd

Start the development server:

npm run dev

✍️ Usage

Tasks are preloaded into columns.

You can drag tasks between columns.

Click Edit to modify the task text.

Click Save to apply changes.

Click Delete to remove a task.

📱 Responsive Design

On mobile: Columns stack vertically

On tablet and desktop: Columns are side-by-side

Each column takes full height with internal scroll when tasks overflow

📌 Notes

The app currently uses local state. For persistence, consider integrating a backend or localStorage.

📃 License

This project is open source and available under the MIT License.

🙌 Acknowledgements

@hello-pangea/dnd for stable drag-and-drop

Tailwind CSS for styling

💡 Future Enhancements

✅ Add new task modal

🗂️ Support for project categories

💾 Backend integration for persistence

🔐 User authentication