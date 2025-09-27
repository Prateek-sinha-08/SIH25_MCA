#!/bin/bash

# SIH25 MCA Project Setup Script

echo "🚀 Setting up SIH25 MCA Project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if MongoDB is running (optional)
echo "📦 Installing dependencies..."

# Install root dependencies
echo "Installing root dependencies..."
npm install

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Create environment files from examples
echo "🔧 Setting up environment files..."

if [ ! -f backend/.env ]; then
    cp backend/.env.example backend/.env
    echo "Created backend/.env from template"
fi

if [ ! -f frontend/.env ]; then
    cp frontend/.env.example frontend/.env
    echo "Created frontend/.env from template"
fi

echo "✅ Setup complete!"
echo ""
echo "To start the development servers:"
echo "1. Start MongoDB (if not running)"
echo "2. Run 'npm run dev' from the root directory"
echo ""
echo "Or start them individually:"
echo "- Backend: cd backend && npm run dev"
echo "- Frontend: cd frontend && npm start"