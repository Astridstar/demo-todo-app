#!/bin/bash

docker image build -t todo-server-kubernetes-app .
docker tag todo-server-kubernetes-app:latest ghcr.io/astridstar/todo-server-kubernetes-app:latest
docker push ghcr.io/astridstar/todo-server-kubernetes-app:latest