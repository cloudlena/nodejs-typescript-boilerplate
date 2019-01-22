FROM node:current as builder
RUN groupadd -r appuser && useradd --no-log-init -r -g appuser appuser
WORKDIR /usr/src/app
COPY . ./
RUN npm ci
RUN npm run build

FROM node:current-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist dist/
COPY --from=builder /etc/passwd /etc/passwd
RUN npm ci --production
USER appuser
ENTRYPOINT ["npm", "start"]
