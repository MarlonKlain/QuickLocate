![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)

# 📦 QuickLocate

QuickLocate is a mobile application designed to simplify **inventory tracking and location management** in warehouse environments. Built with real-world experience in mind, it allows workers to quickly search, view, and update the location of items — reducing wasted time and human error.

This project also marks my first full-stack application, built from the ground up to demonstrate not only my current skills but also my commitment to becoming a professional software engineer. Every line of code reflects hands-on learning in backend development, database design, secure authentication, and mobile UI.

---

## 🎯 Motivation

As someone currently working in a warehouse, I’ve often faced the challenge of trying to locate misplaced items without proper tracking systems. This inspired me to create **QuickLocate** — a tool to make warehouse item management **faster, more accurate, and more user-friendly** for everyday workers.

This app is not just a solution — it’s a personal milestone in my journey as a developer.

---

## 🧠 What I Learned

Throughout this project, I practiced and learned:

- 🔐 Building secure authentication systems with JWT and bcrypt
- 🧩 Designing normalized relational databases with PostgreSQL
- ⚙️ Connecting a mobile app to a custom backend using RESTful APIs
- 📱 Managing state and persistent local storage in React Native
- 🗃️ Designing endpoints and data models based on real-world use cases
- 💻📱Responsive layout optimized for various screen sizes

---

## 🚀 Features

### ✅ Core Functionality

- 🔐 User login, registration, and logout
- 📦 Search for items by:
  - Code
  - Part number
  - Description
  - Location
- 📍 Update the location of an item
- 🕓 View item **location change history** with timestamps

### 🛡️ Authentication

- JWT-based secure login
- Passwords encrypted with bcrypt
- Auth-protected API endpoints

---

## ⚙️ Tech Stack

| Layer        | Tech Used                          |
|--------------|------------------------------------|
| Language     | JavaScript                         |
| Frontend     | React Native, Expo, Toast          |
| Backend      | Node.js, Fastify, JWT, bcrypt      |
| Database     | Neon (PostgreSQL)                  |
| Local Storage| AsyncStorage                       |
| Versioning   | Git, GitHub                        |

---

## 🗄️ Database Schema (Overview)

- `users`: Registered app users
- `items`: Products in the warehouse
- `locations`: Valid warehouse locations
- `item_location_history`: Tracks changes in item locations (with timestamps)

---

##🔮 Future Enhancements

Here’s what I’m planning to add to keep improving QuickLocate:

📷 QR code scanning for faster item lookup

🧠 Image/photo recognition for item detection

👥 Role-based access (admin, warehouse staff, etc.)

📝 Full CRUD for items

👤 Link history changes to the specific user who made them

💅 Improved mobile UI and UX

##🙋‍♂️ About Me
Hi, I’m Marlon — a Software Engineering student and passionate self-learner. I built this app while working in a warehouse and learning to become a better developer.

This is more than just a project — it’s a real-world solution and a showcase of what I can build when I see a problem worth solving.

If you’re a recruiter, developer, or mentor, I’d love to connect.

##📫 Contact
GitHub: github.com/MarlonKlain

LinkedIn: (https://www.linkedin.com/in/marlon-klain/)

Email: marlondossantosklain@gmail.com


