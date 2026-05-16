# VolunteerHub — Connect, Volunteer, Impact

> **VolunteerHub** is a modern, community-driven platform designed to connect passionate volunteers with organizations seeking help. It simplifies the process of finding, joining, and managing volunteer activities while providing tools for collaboration and impact tracking.

## 🌐 Live Demo

Explore **VolunteerHub** now:

**https://volunteer-hub-two.vercel.app/**

---

## 📋 Table of Contents

- [What is VolunteerHub?](#-what-is-volunteerhub)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Demo Walkthrough](#-demo-walkthrough)
- [Team](#-team)

---

## 🌟 What is VolunteerHub?

VolunteerHub is a comprehensive volunteer management platform built with cutting-edge web technologies. It serves as a bridge between:

- **Volunteers** looking for meaningful opportunities
- **Organizations** needing support for their events and initiatives

The platform streamlines the entire volunteer lifecycle—from discovery and registration to communication and recognition.

---

## 🚀 Key Features

### For Volunteers

- **Search & Discovery**
  - Find volunteer opportunities by location, category, date, and keywords
  - Browse trending and featured events
  - View detailed activity information with images and descriptions
  
- **Easy Registration**
  - One-click registration for events
  - Automatic email confirmations
  - Calendar integration (Google Calendar, Outlook, Apple Calendar)
  
- **Profile & History**
  - Track volunteer hours and impact
  - Maintain a portfolio of completed activities
  - Earn badges and recognition for achievements
  
- **Communication**
  - Direct messaging with organizers
  - Group chat for event participants
  - Notification system for updates and reminders

### For Organizations

- **Event Management**
  - Create and publish volunteer opportunities
  - Set location, date, time, and capacity
  - Upload photos and promotional materials
  
- **Volunteer Management**
  - Track registered volunteers
  - View participant details
  - Manage attendance and check-ins
  
- **Communication Tools**
  - Send announcements to all volunteers
  - Export participant lists
  - Build a volunteer community

### Platform Features

- **Responsive Design** - Seamless experience across desktop, tablet, and mobile
- **Real-Time Updates** - Instant notifications for new events and messages
- **Secure Authentication** - Email/password and social login support
- **Admin Dashboard** - Comprehensive tools for platform management

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 19 with TypeScript
- **UI Components**: Material UI (MUI)
- **Navigation**: React Router
- **State Management**: React Hooks, Context API
- **Date/Time**: date-fns
- **Icons**: Material Icons
- **Charts**: Recharts

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Cloud MongoDB Atlas)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Environment Management**: dotenv

### Deployment

- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas
- **Version Control**: GitHub

---

## 📁 Project Structure

### Frontend (`frontend/`)

```
frontend/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Auth/         # Login, register, forgot password
│   │   ├── Common/       # Navbar, footer, buttons, cards
│   │   ├── Events/       # Event list, detail, card components
│   │   ├── Profile/      # User profile, settings
│   │   ├── Admin/        # Admin dashboard components
│   │   └── Charts/       # Data visualization components
│   ├── pages/            # Page-level components
│   │   ├── EventListPage.tsx
│   │   ├── EventDetailPage.tsx
│   │   ├── AuthPage.tsx
│   │   ├── UserProfilePage.tsx
│   │   ├── AdminDashboard.tsx
│   │   └── LandingPage.tsx
│   ├── services/         # API service clients
│   │   ├── eventService.ts
│   │   ├── authService.ts
│   │   ├── profileService.ts
│   │   └── adminService.ts
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── context/          # Context providers
│   └── App.tsx           # Main application component
├── public/             # Static assets
└── package.json
```

### Backend (`backend/`)

```
backend/
├── config/
│   └── db.js           # Database connection
├── routes/
│   ├── authRoutes.js   # Authentication routes
│   ├── eventsRoutes.js # Event management routes
│   ├── usersRoutes.js  # User profile routes
│   └── adminRoutes.js  # Admin routes
├── middleware/
│   ├── authMiddleware.js
│   └── errorHandler.js
├── models/
│   ├── User.js
│   ├── Event.js
│   └── Registration.js
├── controllers/
│   ├── authController.js
│   ├── eventController.js
│   ├── userController.js
│   └── adminController.js
└── server.js         # Express application entry point
```

---

## 🏃 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/volunteer-hub.git
cd volunteer-hub
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start the backend server:

```bash
npm start
# or for development
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Update the API base URL in `frontend/src/services/api.ts` (if needed):

```typescript
const API_BASE_URL = 'http://localhost:5000/api';
```

Start the frontend development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🚀 Demo Walkthrough

### 1. Landing Page

Users arrive at a visually engaging landing page that:
- Showcases featured volunteer activities
- Highlights impact statistics
- Provides clear calls to action for volunteers and organizations

### 2. Event Discovery

- Browse events using map or list view
- Filter by date, location, and category
- View event details including description, date/time, location, and requirements

### 3. User Authentication

- Quick registration with email and password
- Social login options (Google, Facebook)
- Secure login process with JWT-based authentication

### 4. Volunteer Registration

- One-click registration for events
- Add events to personal calendar
- Confirmation emails with event details
- Reminders before the event

### 5. User Profile

- Track volunteer hours and impact
- View complete activity history
- Manage personal information and settings
- Earn badges and recognition

### 6. Organization Tools

- Create and manage events
- Track registered volunteers
- Communicate with participants
- Download participant lists for check-in
