# Use an official Node runtime as the base image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application
COPY . .

# Make the container's port 3000 available to the outside world
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
