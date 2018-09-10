FROM node
WORKDIR /src

# Separate copy to cache node modules
COPY package*.json ./
RUN npm i

# Copy everything else over
COPY . .

# Build Client
RUN npm run build

# Run!
EXPOSE 1337
ENV NODE_ENV=production
CMD ["npm", "start"]
