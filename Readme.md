Here’s a clean, professional **README.md** for your chat app project — covering setup, features, tech stack, and usage:

---

```markdown
# 💬 Real-Time Chat Application

A modern real-time chat application built using the **MERN Stack**, **Socket.io**, **TailwindCSS**, and **DaisyUI**.  
It supports **JWT-based Authentication**, **Authorization**, and **Instant Messaging** with real-time **Online User Status** updates.

---

## 🚀 Features

✨ **Tech Stack**
- **Frontend:** React + TailwindCSS + DaisyUI  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB + Mongoose  
- **Real-time Communication:** Socket.io  
- **State Management:** Zustand  

💡 **Core Functionalities**
- 🔐 **User Authentication & Authorization** with JWT  
- 💬 **Real-time Messaging** using Socket.io  
- 🟢 **Online User Status Tracking**  
- 🌍 **Global State Management** with Zustand  
- 🧠 **Persistent Login Sessions**  
- 🪲 **Error Handling** (Server + Client)  
- 🧰 **Clean UI** using TailwindCSS & DaisyUI components  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Gagan-jain-004/Chatify.git
cd chat-app
````

### 2️⃣ Install dependencies

#### For backend:

```bash
cd backend
npm install
```

#### For frontend:

```bash
cd ../frontend
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file inside the **backend** directory:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the application

#### Start backend:

```bash
cd backend
npm run dev
```

#### Start frontend:

```bash
cd ../frontend
npm run dev
```

By default,

* Frontend runs on: `http://localhost:5173`
* Backend runs on: `http://localhost:5001`

---

## ⚡ Real-time Communication Flow

1. User logs in → JWT is generated and stored securely.
2. Socket.io connects upon authentication.
3. Users can send/receive messages instantly.
4. Online/offline statuses update dynamically.

---

## 🧠 State Management

Global state (auth, socket connection, messages, etc.) is handled via **Zustand** for simplicity and efficiency.

---

## 🧰 Error Handling

* **Frontend:** Graceful UI notifications for failed API calls or socket errors.
* **backend:** Centralized error middleware with status codes and structured responses.

---

## 🖼️ UI Showcase

Built with **TailwindCSS** + **DaisyUI** for a clean and responsive design.
Supports dark/light themes and adaptive layouts.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Added feature xyz"`
4. Push to your branch: `git push origin feature-name`
5. Create a pull request

---

## 📜 License

This project is licensed under the **MIT License**.

---

### 🌟 Highlights Recap

🌟 Tech stack: MERN + Socket.io + TailwindCSS + Daisy UI
🎃 Authentication & Authorization with JWT
👾 Real-time messaging with Socket.io
🚀 Online user status
👌 Global state management with Zustand
🐞 Error handling (Server + Client)

```
