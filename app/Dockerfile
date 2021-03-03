# Use a lighter version of Node as a parent image
FROM node
RUN npx express-generator api
WORKDIR /api
RUN npm install
RUN npm install --save cors
COPY app.js .
COPY testAPI.js routes/
COPY www bin/
EXPOSE 9000
CMD ["npm", "start"]