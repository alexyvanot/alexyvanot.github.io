FROM node:18-alpine AS builder

WORKDIR /app

COPY . ./

RUN npm install

ARG PUBLIC_SERVICE_ID
ARG PUBLIC_TEMPLATE_ID
ARG PUBLIC_EMAILJS_KEY

ENV PUBLIC_SERVICE_ID=$PUBLIC_SERVICE_ID
ENV PUBLIC_TEMPLATE_ID=$PUBLIC_TEMPLATE_ID
ENV PUBLIC_EMAILJS_KEY=$PUBLIC_EMAILJS_KEY

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html

# Delete default html of Nginx 
RUN rm -f /usr/share/nginx/html/index.html && \
    ln -s 404.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]