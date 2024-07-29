1. application Node JS

## SETUP nodejs 
sudo apt install nodejs
sudo apt install npm

## install Dependencies
npm install

## Test application 
node app.js
localhost:8081


2. Conteneurisation Application

## Docker images
docker build -t <dockerhub username>/nodejs-demo-image .
sudo docker run --name nodejs-demo-image -p 8081:8081 -d --restart=always <dockerhub username>/nodejs-demo-image
sudo docker login -u <dockerhub username>
docker tag <dockerhub username>/nodejs-demo-image:latest <dockerhub username>/<repository_name>
docker push <dockerhub username>/<repository_name>
sudo docker pull <dockerhub username>/<repository_name>


3. Job Orchestrator

## SETUP Jenkins
docker pull jenkins/jenkins
mkdir /home/elnb/jenkins
cd jenkins 
docker run -d -p 8080:8080 -p 50000:50000 -v /home/elnb/jenkins:/var/jenkins_home  -v /usr/bin/docker:/usr/bin/docker --restart=always jenkins/jenkins
## Access the Jenkins Dashboard
docker logs [container_id]
http://localhost:8080


