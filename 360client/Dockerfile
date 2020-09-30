FROM node

# Create app directory
WORKDIR /home/

# Bundle app source
COPY publish /home/
RUN npm install

EXPOSE 8888
CMD [ "npm", "start" ]