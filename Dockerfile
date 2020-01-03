FROM node:current AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:current-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist dist/
RUN npm ci --production
USER node
CMD ["npm", "start"]
