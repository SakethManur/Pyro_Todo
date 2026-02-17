# Full-Stack Todo Application 📝

A full-stack Todo application built as a screening assessment. It features a Spring Boot REST API connected to an in-memory H2 database, and a responsive React frontend with a modern UI and Dark/Light mode support.

## 🛠️ Tech Stack
* **Backend:** Java, Spring Boot, Spring Data JPA, H2 Database, Maven
* **Frontend:** React.js, Vite, Axios, CSS3 (Flexbox/CSS Variables)

## ✨ Features
* Complete CRUD operations (Create, Read, Update, Delete).
* Inline task editing mode.
* Server-side validation (Mandatory titles).
* Zero-configuration in-memory database (H2) for easy testing.
* Responsive, centered UI with a Dark Mode toggle.

## 🚀 How to Run the Application

### 1. Start the Backend (Spring Boot)
The backend runs on `http://localhost:8080`. You do not need to install a local database, as H2 runs in-memory.

Navigate to the backend directory and run the Maven wrapper:
\`\`\`bash
# On Windows
.\mvnw.cmd spring-boot:run

# On Mac/Linux
./mvnw spring-boot:run
\`\`\`

### 2. Start the Frontend (React)
The frontend requires Node.js. Open a new terminal tab, navigate to the frontend directory, and run:

\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`
Click the local link provided by Vite (usually `http://localhost:5173`) to view the application.

---
**Author:** Saketh Manur  
**Contact:** manursaketh@gmail.com
