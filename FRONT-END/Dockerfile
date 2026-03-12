FROM node:18 as build

WORKDIR /app

# Copy dependency files first
COPY package.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build React app
RUN npm run build


FROM nginx:latest

# Copy build files to nginx
COPY --from=build /app/build /usr/share/nginx/html
