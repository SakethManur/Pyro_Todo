# Full-Stack Todo Application 📝

A full-stack Todo application built as a screening assessment. It features a **Spring Boot REST API** connected to an in-memory **H2 database**, and a responsive **React** frontend with a modern UI and Dark/Light mode support.

---

## 🛠️ Tech Stack

**Backend:**
- Java
- Spring Boot
- Spring Data JPA
- H2 Database
- Maven

**Frontend:**
- React.js
- Vite
- Axios
- CSS3 (Flexbox & CSS Variables)

---

## ✨ Features

- Full CRUD: Create, Read, Update, and Delete tasks
- Inline Editing: Edit task titles directly within the list
- Server-side Validation: Mandatory titles enforced via backend validation
- Responsive UI: Clean centered layout with Dark/Light mode toggle
- Zero-Config Database: H2 in-memory database for instant setup

---

## 🚀 How to Run the Application

### 1️⃣ Start the Backend (Spring Boot)

The backend runs on:

```
http://localhost:8080
```

Navigate to the backend project directory and run:

```bash
# Windows
.\mvnw.cmd spring-boot:run

# Mac/Linux
./mvnw spring-boot:run
```

---

### 2️⃣ Start the Frontend (React)

Make sure **Node.js** is installed.

Open a new terminal and run:

```bash
cd frontend
npm install
npm run dev
```

Vite will provide a local development link (usually):

```
http://localhost:5173
```

Open it in your browser.

---

## 🗄️ Database Access (H2 Console)

The application uses an in-memory H2 database.  
Data resets every time the backend restarts.

### H2 Console Details

- Console URL:  
  `http://localhost:8080/h2-console`

- JDBC URL:
  ```
  jdbc:h2:mem:tododb
  ```

- Username:
  ```
  sa
  ```

- Password:
  ```
  (leave blank)
  ```

---

## ⚙️ Required application.properties Configuration

Ensure your `src/main/resources/application.properties` contains:

```properties
# Database Connection
spring.datasource.url=jdbc:h2:mem:tododb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

# H2 Console
spring.h2.console.enabled=true
spring.h2.console.settings.web-allow-others=true
```

---

## 👨‍💻 Author

**Saketh Manur**  
📧 manursaketh@gmail.com