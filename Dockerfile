FROM Node

WORKDIR app/

COPY . .

RUN npm install

CMD ['node', 'server']