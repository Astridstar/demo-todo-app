#Stage 1
FROM node:alpine as todo-app-build
WORKDIR /client
COPY package.json README.md ./
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY ./public ./public
COPY ./src ./src
#RUN npm run restore
RUN npm install

# Remove from the build file and move it to the config to remove the need to rebuild the image
# each time there is a change in the IP address to the backend web service
# ENV REACT_APP_baseAPIURL=http://192.168.98.137:31102

FROM nginx:latest
LABEL maintainer=Tester
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=todo-app-build /client .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
