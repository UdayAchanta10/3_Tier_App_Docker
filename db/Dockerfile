FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=example
ENV MYSQL_DATABASE=testdb

COPY init.sql /docker-entrypoint-initdb.d/
