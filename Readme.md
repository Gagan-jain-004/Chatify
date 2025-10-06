
# Real-Time Chat Application

A modern real-time chat application built using the MERN Stack, Socket.io, TailwindCSS, and DaisyUI.
It supports JWT-based authentication, authorization, and instant messaging with real-time online user status updates.

---

## Features

### Tech Stack

* Frontend: React, TailwindCSS, DaisyUI
* Backend: Node.js, Express.js
* Database: MongoDB, Mongoose
* Real-time Communication: Socket.io
* State Management: Zustand

### Core Functionalities

* User authentication and authorization with JWT
* Real-time messaging using Socket.io
* Online user status tracking
* Global state management with Zustand
* Persistent login sessions
* Error handling (backend + frontend)
* Clean UI using TailwindCSS and DaisyUI components

---

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/Gagan-jain-004/Chatify.git
cd chat-app
```

### Install Dependencies

Backend:

```bash
cd backend
npm install
```

Frontend:

```bash
cd ../frontend
npm install
```

### Setup Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the Application

Start Backend:

```bash
cd backend
npm run dev
```

Start Frontend:

```bash
cd ../frontend
npm run dev
```

By default:

* Frontend runs on: [http://localhost:5173](http://localhost:5173)
* Backend runs on: [http://localhost:5001](http://localhost:5001)

---

## Real-time Communication Flow

1. User logs in and a JWT token is generated and stored securely.
2. Socket.io connects upon authentication.
3. Users can send and receive messages instantly.
4. Online and offline statuses update dynamically.

---

## State Management

Global state (authentication, socket connection, messages, etc.) is handled using Zustand for simplicity and performance.

---

## Error Handling

* Frontend: User-friendly notifications for failed API calls or socket errors.
* Backend: Centralized error middleware with proper status codes and structured responses.

---

## UI Showcase

Built with TailwindCSS and DaisyUI for a clean, responsive interface.
Supports both dark and light themes.

---

## Contributing

1. Fork the repository
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:

   ```bash
   git commit -m "Added feature xyz"
   ```
4. Push to your branch:

   ```bash
   git push origin feature-name
   ```
5. Create a pull request

---

## License

This project is licensed under the MIT License.

---

## Highlights Recap

* Tech Stack: MERN + Socket.io + TailwindCSS + DaisyUI
* Authentication & Authorization: JWT-based
* Real-time Messaging: Socket.io
* Online User Status
* Global State Management: Zustand
* Error Handling: Backend + Frontend

