# 🏢 Employee Review System (ERS)

<div align="center">

**A comprehensive web application for employee performance reviews and feedback management**

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![EJS](https://img.shields.io/badge/EJS-8B4513?style=for-the-badge)](https://ejs.co/)

[![GitHub stars](https://img.shields.io/github/stars/priyach19/ERS?style=social)](https://github.com/priyach19/ERS/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/priyach19/ERS?style=social)](https://github.com/priyach19/ERS/network)
[![GitHub issues](https://img.shields.io/github/issues/priyach19/ERS)](https://github.com/priyach19/ERS/issues)

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](https://github.com/priyach19/ERS/issues) • [💡 Request Feature](https://github.com/priyach19/ERS/issues)

</div>

---

## 📖 About The Project

The Employee Review System (ERS) is a modern web application designed to streamline the employee performance review process. It provides a comprehensive platform where administrators can manage employees and assign review cycles, while employees can submit feedback for their colleagues and view their own performance reviews.

### 🎯 Problem It Solves
- **Manual Review Processes**: Eliminates paper-based and email-driven review systems
- **Scattered Feedback**: Centralizes all employee feedback in one platform
- **Lack of Transparency**: Provides clear visibility into the review process
- **Administrative Overhead**: Reduces manual work for HR and management

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 👔 Admin Dashboard Features
- 🏗️ **Employee Management**
  - Add new employees to the system
  - Remove employees when needed
  - Update employee information
  - View comprehensive employee list
  
- 📋 **Review Management** 
  - Create performance review cycles
  - Assign employees to review colleagues
  - View all active and completed reviews
  - Monitor review completion status


</td>
<td width="50%">

### 👨‍💼 Employee Dashboard Features
- 📝 **Review Submission**
  - Submit feedback for assigned colleagues
  - Rate performance on multiple criteria
  - Provide detailed written feedback
  
- 👀 **Review Access**
  - View received performance reviews
  - Access historical feedback
  - Track personal performance trends


</td>
</tr>
</table>

---

## 🛠️ Built With

<div align="center">

**Backend Technologies**
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Database & Storage**
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge)

**Frontend & Templating**
![EJS](https://img.shields.io/badge/EJS-8B4513?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Authentication & Security**
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge)

</div>

---

## 📸 Screenshots & Demo

<div align="center">

### 🎬 Application Preview
> *Add your demo GIF here*
![Screenshot 2024-10-22 165525](https://github.com/user-attachments/assets/89e978f2-00c7-468d-8094-cc947a3bb4a0)


### 📱 Admin Dashboard
> *Comprehensive admin interface for managing employees and reviews*
![Screenshot 2024-10-22 165714](https://github.com/user-attachments/assets/31a12ad5-2b8f-4688-92df-93371507575a)


### 👤 Employee Dashboard  
> *Clean employee interface for submitting and viewing reviews*
![Screenshot 2024-10-22 170408](https://github.com/user-attachments/assets/b90f95ee-26ff-4e61-93c6-7f782760ba0d)


</div>

---

## 🏗️ Architecture Overview

```mermaid
graph TB
    A[Client Browser] --> B[Express.js Server]
    B --> C[Passport.js Authentication]
    C --> D[Route Handlers]
    D --> E[Controllers]
    E --> F[MongoDB Database]
    B --> G[EJS Template Engine]
    G --> H[Rendered HTML Views]
    H --> A
    
    subgraph "Database Collections"
        F --> I[Users Collection]
        F --> J[Reviews Collection]
        F --> K[Sessions Collection]
    end
    
    subgraph "MVC Architecture"
        E --> L[Dashboard Controller]
        E --> M[Reviews Controller]  
        E --> N[Users Controller]
    end
```

### 📁 Project Structure

```
ERS/
├── 📄 index.js                          # Application entry point
├── 📦 package.json                     # Dependencies and scripts
├── 🔒 .env                            # Environment variables (create this)
├── 📂 assets/                         # Static files
│   ├── 🎨 css/                       # Stylesheets
│   ├── 🖼️ images/                    # Images and media files
│   └── ⚡ js/                        # Client-side JavaScript
├── ⚙️ config/                        # Configuration files
│   ├── 🗄️ mongoose.js                # Database connection setup
│   ├── 🛡️ middleware.js              # Custom middleware functions
│   └── 🔐 passport-local-strategy.js  # Authentication strategy
├── 🎮 controllers/                   # Business logic layer
│   ├── 📊 dashboard_controller.js     # Dashboard operations
│   ├── 📝 reviews_controller.js       # Review management logic
│   └── 👥 users_controller.js         # User management operations
├── 🗃️ models/                       # Database schemas
│   ├── 📋 review.js                  # Review data model
│   └── 👤 user.js                    # User data model
├── 🛣️ routes/                       # API endpoint definitions
│   ├── 🏠 index.js                   # Main routing file
│   ├── 📝 reviews.js                 # Review-related routes
│   └── 👥 users.js                   # User-related routes
└── 👀 views/                        # EJS template files
    ├── 🏗️ layout/                   # Layout templates
    ├── 📂 _header/                   # Header partials
    ├── 👔 admin_dashboard/           # Admin interface templates
    ├── 👤 employee_dashboard/        # Employee interface templates
    ├── ➕ addEmployee/               # Add employee form
    ├── ✏️ edit_employee/             # Edit employee form
    ├── 🔑 forgetPassword/            # Password recovery
    ├── 🔐 login/                     # Login page
    └── 📝 register/                  # Registration page
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- ![Node.js](https://img.shields.io/badge/Node.js-v14+-green?logo=node.js) **Node.js** (version 14.0 or higher)
- ![MongoDB](https://img.shields.io/badge/MongoDB-v4+-green?logo=mongodb) **MongoDB** (local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account)
- ![Git](https://img.shields.io/badge/Git-latest-green?logo=git) **Git** (for cloning the repository)
- ![npm](https://img.shields.io/badge/npm-v6+-green?logo=npm) **npm** (comes with Node.js)

### 🔧 Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/priyach19/ERS.git
   cd ERS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   This will install all required packages:
   - `express` - Web application framework
   - `mongoose` - MongoDB object modeling
   - `ejs` - Embedded JavaScript templating
   - `express-session` - Session middleware
   - `passport` - Authentication middleware
   - `passport-local` - Local authentication strategy

3. **Environment Configuration**
   
   Create a `.env` file in the root directory and add the following variables:
   
   ```env
   # Server Configuration
   PORT=3000
   NODE_ENV=development
   
   # Database Configuration
   # For local MongoDB:
   MONGODB_URI=mongodb://localhost:27017/employee_review_system
   
   # For MongoDB Atlas (recommended for production):
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/employee_review_system?retryWrites=true&w=majority
   
   # Security Configuration
   SESSION_SECRET=your_super_secure_session_secret_key_here_make_it_long_and_random
   
   # Optional: Additional security settings
   BCRYPT_ROUNDS=10
   ```

4. **Database Setup**
   
   **Option A: Local MongoDB**
   - Ensure MongoDB is running on your system
   - The application will automatically create the database and collections
   
   **Option B: MongoDB Atlas (Recommended)**
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a new cluster
   - Get your connection string and update the `MONGODB_URI` in your `.env` file
   - Whitelist your IP address in Atlas network settings

5. **Start the application**
   ```bash
   # Development mode (with auto-restart)
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   
   Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

### 🎭 Default Login Credentials

Once the application is running, you can login with these default accounts:

| Role | Email | Password | Description |
|------|-------|----------|-------------|
| 👑 **Admin** | `admin@company.com` | `admin123` | Full access to all features |
| 👤 **Employee** | `employee@company.com` | `employee123` | Employee-level access |

> **Note**: Change these default credentials immediately in a production environment!

---

## 💻 Usage Guide

### For Administrators

1. **Login** with admin credentials
2. **Add Employees**: Navigate to the employee management section
   - Fill in employee details (name, email, department)
   - Assign appropriate roles
3. **Create Review Cycles**: Set up performance review periods
4. **Assign Reviewers**: Select which employees will review others
5. **Monitor Progress**: Track completion rates and manage the review process

### For Employees

1. **Login** with your employee credentials
2. **View Assignments**: Check which colleagues you need to review
3. **Submit Reviews**: 
   - Provide ratings and detailed feedback
   - Submit reviews before deadlines
4. **View Your Reviews**: Access feedback received from colleagues
5. **Update Profile**: Keep your information current



## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Basic employee and admin dashboards
- ✅ Review submission and viewing
- ✅ User authentication and authorization
- ✅ MongoDB integration

### Phase 2 (Planned)
- 📧 Email notifications for review assignments
- 📊 Advanced analytics and reporting
- 📱 Responsive mobile design
- 🔍 Search and filtering capabilities
- 📈 Performance metrics dashboard

### Phase 3 (Future)
- 🔔 Real-time notifications
- 📋 Custom review templates
- 🏆 Goal setting and tracking
- 💬 Comments and discussions on reviews
- 🔄 Integration with HR systems
- 📊 Data export functionality

---



## 📊 Project Statistics

![GitHub repo size](https://img.shields.io/github/repo-size/priyach19/ERS)
![GitHub language count](https://img.shields.io/github/languages/count/priyach19/ERS)
![GitHub top language](https://img.shields.io/github/languages/top/priyach19/ERS)
![GitHub last commit](https://img.shields.io/github/last-commit/priyach19/ERS)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/priyach19/ERS)


<div align="center">

**Built with ❤️ by [Priya](https://github.com/priyach19)**

*Empowering organizations with better employee feedback systems*

[![GitHub followers](https://img.shields.io/github/followers/priyach19?style=social)](https://github.com/priyach19)
[![GitHub stars](https://img.shields.io/github/stars/priyach19/ERS?style=social)](https://github.com/priyach19/ERS)

---

**⭐ Don't forget to star this repository if you found it helpful!**

</div>
