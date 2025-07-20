FROM node:18

# Set working directory
WORKDIR /workspace

# Install dependencies (optional, speeds up container start)
COPY package*.json ./
RUN npm install

# Copy the rest of your app (optional, for build steps)
# COPY . .

# Expose the app port
EXPOSE 3000

CMD [ "npm", "start" ]