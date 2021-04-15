
FROM amazon/aws-lambda-nodejs:12
COPY index.js package*.json ./
RUN npm install
CMD [ "index.lambdaHandler" ]