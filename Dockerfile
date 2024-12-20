# Step 1: Use Node.js as the base image
FROM node:23-alpine3.20

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN npm install

# Step 4: Copy the rest of the application files
COPY . .


# Step 6: Expose the port used by the Next.js app
EXPOSE 3000

# Step 7: Start the application
CMD ["yarn", "dev"]
