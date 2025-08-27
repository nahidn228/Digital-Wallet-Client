# Digital Wallet Frontend

A secure, role-based, and user-friendly frontend application for a Digital Wallet System (similar to bKash or Nagad), built with React.js, Redux Toolkit, and RTK Query. This frontend consumes a backend API to enable Users, Agents, and Admins to perform financial operations and manage wallets seamlessly.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Tech Stack](#tech-stack)  
- [Features](#features)  
  - [Public Landing Section](#public-landing-section)  
  - [Authentication](#authentication)  
  - [User Dashboard](#user-dashboard)  
  - [Agent Dashboard](#agent-dashboard)  
  - [Admin Dashboard](#admin-dashboard)  
  - [General Features](#general-features)  
- [UI/UX Considerations](#uiux-considerations)  
- [Setup and Installation](#setup-and-installation)  
- [Usage](#usage)  

---

## Project Overview

The Digital Wallet Frontend provides a responsive and interactive interface for managing digital wallets. Users, Agents, and Admins can log in and perform financial operations, including deposits, withdrawals, sending money, and managing accounts, with role-based dashboards tailored to their permissions.

---

## Tech Stack

**Frontend:**

- React.js  
- React Router  
- Redux Toolkit & RTK Query  
- TypeScript  
- Tailwind CSS  

**Backend:**

- Node.js / Express (REST API)  
- MongoDB / Mongoose  
- JWT + bcrypt for secure authentication  

---

## Features

### Public Landing Section

Accessible without login, including:

- **Home Page** — Landing page with a sticky navbar, hero banner, tagline, call-to-action buttons, footer, and responsive design.  
- **About Page** — Story, mission, and team details.  
- **Features Page** — List of features with visuals/icons.  
- **Pricing Page (Optional)** — Service fees and subscription tiers.  
- **Contact Page** — Inquiry form with simulated submission.  
- **FAQ Page** — Common questions and answers.  

### Authentication

- Login form with JWT-based authentication.  
- Registration form with role selection (User or Agent).  
- Role-based redirection after login.  
- Persisted authentication state after refresh.  
- Logout functionality.  

### User Dashboard

- Overview with wallet balance, quick actions, and recent transactions.  
- Deposit money (via agent cash-in simulation).  
- Withdraw money.  
- Send money to another user (search by phone/email).  
- Transaction history with pagination and filtering by type/date.  
- Profile management — update name, phone, and password.  

### Agent Dashboard

- Overview with cash-in/out summary and recent activity.  
- Add money to a user’s wallet.  
- Withdraw money from a user’s wallet.  
- View all transactions handled by the agent.  
- Commission history (optional).  
- Profile management — update personal info and password.  

### Admin Dashboard

- Overview with total users, agents, transaction count, and volume.  
- Manage users (view, block/unblock).  
- Manage agents (approve, suspend).  
- View all transactions with search and multiple filters (category, status, amount, etc.) and pagination.  
- Adjust system fees/limits (optional).  
- Profile management — update admin account settings.  

### General Features

- Role-based navigation menu.  
- Loading indicators and global error handling.  
- Form validations (required fields, numeric checks, positive amounts) and advanced filtering.  
- Pagination for long lists.  
- Dynamic data visualization: cards, bar charts, pie charts, tables.  
- Toast notifications for success/error messages.  

---

## UI/UX Considerations

- Fully responsive design for all devices.  
- Consistent margins, spacing, and color theme throughout the project.  
- Clear typography and iconography.  
- Skeleton loaders for data fetching to improve performance.  
- Accessibility standards followed.  
- Populated with realistic data for a professional finish.  

---

## Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/nahidn228/Digital-Wallet-Client.git
cd Digital-Wallet-Client
npm install
```

---
