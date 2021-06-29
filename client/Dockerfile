FROM node:alpine as todo-app-build

WORKDIR /client

COPY package.json yarn.lock README.md ./

RUN yarn

COPY ./public ./public

COPY ./src ./src

# Remove from the build file and move it to the config to remove the need to rebuild the image
# each time there is a change in the IP address to the backend web service
# ENV REACT_APP_baseAPIURL=http://192.168.98.137:31102

RUN yarn build

FROM nginx:latest

LABEL maintainer=Tester

COPY --from=todo-app-build /client/build/ /usr/share/nginx/html

EXPOSE 80
