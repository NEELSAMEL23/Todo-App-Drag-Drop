# Drag-and-Drop Task Board

A **Task Management App** built with **React**, **Tailwind CSS**, and **@hello-pangea/dnd** for drag-and-drop functionality. This app helps users organize and track tasks by allowing them to move tasks between columns, edit them inline, and delete them as needed.

## 🛠️ Technologies Used

- **React (v19)**: The frontend library used to build the user interface.
- **Tailwind CSS**: A utility-first CSS framework used for styling the app with a mobile-first approach.
- **@hello-pangea/dnd**: Used for implementing drag-and-drop functionality to move tasks between columns.

## 📁 Folder Structure

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


## 🧩 Component Overview

### 1. `TaskBoard.jsx`
- Manages all the column states and the task data.
- Handles drag-and-drop logic to move tasks between columns.
- Manages delete and edit handlers for tasks.

### 2. `TaskColumn.jsx`
- Renders tasks based on their status (To Do, Doing, Done).
- Supports vertical scrolling when content overflows within the column.

### 3. `TaskCard.jsx`
- Displays individual task cards with the task title and tags.
- Includes **Edit** and **Delete** buttons.
- Inline editing is enabled for modifying task details directly within the card.

## 📦 Installation

Follow the steps below to set up the app locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/drag-drop-task-board.git
   cd drag-drop-task-board

2. Install dependencies:
    npm install

3. React Version Compatibility (if you encounter issues with react-beautiful-dnd):
    npm install @hello-pangea/dnd
4. Start the development server:
    npm run dev
5. Open the app in your browser: Visit http://localhost:3000 to see the app in action.


✍️ Usage
Once the app is running:

Tasks are preloaded into columns based on their current status.

Drag tasks between columns (To Do, Doing, Done) using drag-and-drop.

Click the Edit button on a task to modify its text inline.

Click Save to apply any changes made during the edit.

Click Delete to remove a task from the board.

📱 Responsive Design
On Mobile: Columns stack vertically to fit within the smaller screen size.

On Tablet and Desktop: Columns are displayed side-by-side, and each column takes the full height of the viewport with internal scroll when tasks overflow.

📌 Notes
The app currently uses local state to manage data. For persistence across sessions, consider integrating a backend service or using localStorage.

Drag-and-drop functionality is implemented using @hello-pangea/dnd.

📃 License
This project is open source and available under the MIT License. See the LICENSE file for more information.

🙌 Acknowledgements
@hello-pangea/dnd: For providing stable drag-and-drop functionality.

Tailwind CSS: For providing a utility-first CSS framework to quickly style the app.

💡 Future Enhancements
✅ Add New Task Modal: A modal for creating new tasks with additional features.

🗂️ Support for Project Categories: Group tasks into different project categories for better organization.

💾 Backend Integration: Add persistence with a backend (e.g., using Firebase, MongoDB, etc.).

🔐 User Authentication: Enable user authentication to allow users to create accounts and save their tasks across sessions.


Feel free to contribute, report issues, or suggest new features. Happy coding! 😊

### Key Updates:
1. **Component Overview**: A clear explanation of each component's responsibilities.
2. **Folder Structure**: Detailed structure with comments for each file/folder.
3. **Installation**: Step-by-step guide to set up the app locally.
4. **Usage**: A brief explanation on how to interact with the app once it's running.
5. **Responsive Design**: Clarified how the app behaves on mobile, tablet, and desktop.
6. **Future Enhancements**: Added actionable feature ideas for future growth of the app.

This version gives more context and makes the instructions easier to follow. Feel free to make further adjustments as per your requirements!
