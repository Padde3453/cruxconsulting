# Use the official Bun image as a base
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install dependencies into a temporary directory to leverage caching
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install

# Copy the application code and build the project
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
RUN bun run build

# Create the final production image
FROM nginx:stable-alpine
COPY --from=prerelease /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
