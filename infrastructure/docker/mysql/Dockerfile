FROM mysql:8.0

ENV MYSQL_DATABASE=thullo \
  MYSQL_USER=sakusaku \
  MYSQL_PASSWORD=sakusaku \
  MYSQL_ROOT_PASSWORD=sakusaku \
  TZ=Asia/Tokyo

COPY ./initdb.d/* /docker-entrypoint-initdb.d/

COPY ./my.cnf /etc/my.cnf
RUN chmod 644 /etc/my.cnf
CMD ["mysqld"]