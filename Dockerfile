FROM harbor.dass.interno/dass/dkr-build-node
ARG NODE_ENV
ENV TZ=America/Sao_Paulo
RUN mkdir -p /home/node/api-template
WORKDIR /home/node/api-template
COPY ./package.json ./
COPY ./src ./src
RUN echo "NODE_ENV=${NODE_ENV}" >> .env && \
    cat .env && \
    chown -R node:node /home/node/api-template
USER node
RUN npm install \
    && npm audit fix --force \
    && npm ci

###################################################################3
FROM harbor.dass.interno/dass/dkr-node-oracle
COPY --from=0 /home/node/api-template /home/node/api-template
ENV TZ=America/Sao_Paulo
WORKDIR /home/node/api-template
EXPOSE 8000
CMD [ "node", "./src/index.js" ]