FROM node:alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install next
COPY . .
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next 
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public/

EXPOSE 3000

CMD ["next", "start"]
