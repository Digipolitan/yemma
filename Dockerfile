FROM node:8.4.0

# Environement configuration
ARG PORT=6473
ENV PORT=$PORT

# Create workspace directories
WORKDIR /workspace


# Install Global dependecies
RUN npm install -g pm2

# Copy sources files into image
COPY . /workspace

# Install dependencies, need to use --unsafed-perm because user is root.
RUN npm install --unsafe-perm

# Starts admin
CMD ["pm2-docker", "process.yml"]

# Exposing the default port
EXPOSE $PORT