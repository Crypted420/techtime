# Use an official Node.js runtime as a parent image
FROM node:16-alpine3.11

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
RUN npm install

# Build the Next.js app
RUN npm run build

# Set the environment variable
ENV NODE_ENV production

# Expose port 3000 for the application
EXPOSE 3000

# Start the server
CMD ["npm", "start"]