#!/bin/bash
sudo docker network create pg
sudo docker run --network=pg --name pg -idt -p 5432:5432 -e "POSTGRES_PASSWORD=docker" -e "POSTGRES_USER=docker" postgres:alpine 

#para configurar o pgadmin use 
#https://medium.com/@renato.groffe/postgresql-docker-executando-uma-inst%C3%A2ncia-e-o-pgadmin-4-a-partir-de-containers-ad783e85b1a4

docker run --network=pg --name pgadmin -idt -p 8080:80 -e "PGADMIN_DEFAULT_EMAIL=admin@admin.com" -e "PGADMIN_DEFAULT_PASSWORD=admin" dpage/pgadmin4