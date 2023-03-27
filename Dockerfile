# Stage 1: Build the Next.js app
FROM node:16-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the Next.js app using a lightweight Node.js image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --production

# Copy the Next.js build files from the builder stage
COPY --from=builder /app/.next ./.next

# Start the app
CMD ["npm", "start"]