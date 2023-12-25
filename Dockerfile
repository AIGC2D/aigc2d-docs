FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g  pnpm && pnpm install
COPY . .
RUN pnpm run docs:build


 # production stage
 FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist  /usr/share/nginx/html


EXPOSE 80
 CMD ["nginx", "-g", "daemon off;"]