# Testing Node.js x STOMP

## Run local ActiveMQ (STOMP) broker

```sh
docker run -p 61616:61616 -p 61613:61613 -p 8161:8161 rmohr/activemq
```

## Run ActiveMQ consumer

```sh
node consumer.js
```

## Run ActiveMQ producer

```sh
node producer.js
```
