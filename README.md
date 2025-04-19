# Portfolio Website - MERN Stack

A modern and professional portfolio website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Features

- Responsive and modern UI design
- Project showcase with detailed descriptions
- Skills and experience section
- Contact form with email integration
- Blog section for sharing thoughts and experiences
- Admin panel for content management

## Tech Stack

### Frontend

- React.js
- Material-UI
- React Router
- Axios
- Framer Motion (for animations)

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Nodemailer

## Project Structure

```
portfolio/
├── frontend/          # React frontend application
├── backend/           # Node.js backend server
└── README.md         # Project documentation
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory
2. Install dependencies: `npm install`
3. Create a .env file with required environment variables
4. Start the server: `npm run dev`

### Frontend Setup

1. Navigate to the frontend directory
2. Install dependencies: `npm install`
3. Create a .env file with required environment variables
4. Start the development server: `npm start`

## Environment Variables

### Backend (.env)

```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### Frontend (.env)

```
REACT_APP_API_URL=http://localhost:5000
```

## License

MIT License
