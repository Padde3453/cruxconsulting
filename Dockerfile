# Stage 1: Build the application
FROM node:20-slim AS build
LABEL authors="erik"

# Install Bun
RUN apt-get update && apt-get install -y curl unzip
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# Set up the working directory
WORKDIR /app

# Copy package manager files and install dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy the rest of the application source code
COPY . .

# Build the application
RUN bun run build

# Stage 2: Serve the application
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
