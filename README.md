## 🚀 Features

### 🔐 User Authentication
- User Registration
- User Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected backend routes
- Token-based session management
- Logout functionality

### 👤 User Profile
- View user profile
- Update profile information
- Manage age, gender, height and weight
- Select fitness goals
- Profile data stored in MongoDB

### 📊 Fitness Dashboard
- Current Weight
- Height
- Fitness Goal
- Automatic BMI Calculation
- Dynamic user information
- Data loaded from backend APIs

### 🏋️ Workout Tracker
- Add exercises
- Store number of sets
- Store repetitions
- Track workout weight
- View workout history
- User-specific workout records

---

## 🛠️ Tech Stack

### Frontend

- Angular
- TypeScript
- HTML5
- CSS3
- Tailwind CSS
- Angular Forms
- Angular Router
- Angular HttpClient

### Backend

- Node.js
- Express.js
- REST API
- JWT Authentication
- bcrypt

### Database

- MongoDB
- MongoDB Atlas
- Mongoose

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman
- MongoDB Atlas

---

## 📁 Project Structure

```text
FitnessHub/
│
├── client/
│   └── src/
│       └── app/
│           ├── features/
│           │   ├── auth/
│           │   ├── dashboard/
│           │   ├── home/
│           │   └── workout/
│           │
│           ├── services/
│           ├── app.routes.ts
│           └── app.config.ts
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   └── workout.controller.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Workout.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   └── workout.routes.js
│   │
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## 🔄 Application Flow

```text
User
  ↓
Angular Frontend
  ↓
Registration / Login
  ↓
Express REST API
  ↓
Authentication
  ↓
MongoDB Atlas
  ↓
JWT Token
  ↓
Dashboard
  ↓
Profile / Workout Management
```

---

## 🔑 Authentication Flow

When a user logs in:

1. Angular sends the email and password to the backend.
2. Express receives the login request.
3. MongoDB is searched for the registered user.
4. bcrypt verifies the entered password.
5. The backend generates a JWT token.
6. Angular stores the token in local storage.
7. The token is sent in the `Authorization` header for protected API requests.
8. Authentication middleware verifies the JWT before allowing access to protected resources.

Example:

```text
Authorization: Bearer <JWT_TOKEN>
```

---

## 🌐 REST API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### User

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/user/profile` | Get logged-in user's profile |
| PUT | `/api/user/profile` | Update user profile |

### Workout

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/workout` | Add workout |
| GET | `/api/workout` | Get user's workouts |

---

## 📊 BMI Calculation

FitnessHub automatically calculates BMI using the user's height and weight.

```text
BMI = Weight (kg) / Height² (m)
```

Example:

```text
Weight = 70 kg
Height = 1.70 m

BMI = 70 / (1.70 × 1.70)

BMI = 24.2
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/VikashSingh81/FitnessHub.git
```

```bash
cd FitnessHub
```

---

## 🖥️ Run Frontend

Go to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start Angular:

```bash
ng serve
```

Frontend runs at:

```text
http://localhost:4200
```

---

## ⚙️ Run Backend

Open another terminal:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Start backend:

```bash
npm run dev
```

Backend runs at:

```text
http://localhost:5000
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

> ⚠️ Never commit your real `.env` file, MongoDB password, or JWT secret to GitHub.

Add `.env` to `.gitignore`.

---

## 💡 Angular Concepts Used

This project demonstrates several important Angular concepts:

- Standalone Components
- Components
- Data Binding
- Two-Way Binding
- Event Binding
- Property Binding
- Angular Routing
- RouterLink
- FormsModule
- ngModel
- Services
- Dependency Injection
- HttpClient
- Observables
- subscribe()
- Lifecycle Hooks
- ngOnInit()

---

## 🔒 Backend Concepts Used

- REST API Architecture
- Express Routing
- Controllers
- Middleware
- JWT Authentication
- Password Hashing
- MongoDB CRUD Operations
- Mongoose Schema and Models
- Protected Routes
- Environment Variables

---

## 🔮 Future Enhancements

Future versions of FitnessHub can include:

- Nutrition and calorie tracking
- Weight progress charts
- Personalized workout plans
- Trainer management
- Exercise library
- Admin dashboard
- Dark/Light mode
- Email verification
- Forgot password functionality
- AI-powered workout recommendations
- AI-powered diet recommendations
- Real-time fitness analytics

---

## 🎯 Project Objective

The objective of FitnessHub is to provide users with a centralized platform where they can manage their fitness profile, monitor important fitness metrics, and track their workouts.

The project also demonstrates the integration of a modern Angular frontend with a Node.js and Express.js backend using MongoDB for persistent data storage.

---
