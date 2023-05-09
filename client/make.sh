#!/bin/bash

sudo docker image build -t todo-app-frontend .
sudo docker tag todo-app-frontend:latest ghcr.io/astridstar/demo-to-app/todo-app-frontend:latest
sudo docker push ghcr.io/astridstar/demo-to-app/todo-app-frontend:latest


#trivy image  --vuln-type "library" ghcr.io/astridstar/todo-app-frontend:latest 