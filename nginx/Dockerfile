FROM node:14.17-alpine as build

WORKDIR /app
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
# RUN npm ci --silent
RUN npm install
COPY ./frontend .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]