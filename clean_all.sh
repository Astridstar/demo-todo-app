#!/bin/bash
clear

kubectl get deploy,rs,pv,pvc,pod,svc

kubectl delete deploy --all
kubectl delete svc --all
kubectl delete pods --all
kubectl delete pvc --all
kubectl delete pv --all

kubectl get deploy,rs,pv,pvc,pod,svc