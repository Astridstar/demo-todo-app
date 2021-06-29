#!/bin/bash

docker image build -t todo-client-kubernetes-app .
docker tag todo-client-kubernetes-app:latest ghcr.io/astridstar/todo-client-kubernetes-app:latest
docker push ghcr.io/astridstar/todo-client-kubernetes-app:latest