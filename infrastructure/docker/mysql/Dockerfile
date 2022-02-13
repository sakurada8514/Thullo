FROM mysql/mysql-server:8.0

ENV MYSQL_DATABASE=thullo-local \
  MYSQL_USER=sakusaku \
  MYSQL_PASSWORD=sakusaku \
  MYSQL_ROOT_PASSWORD=sakusaku \
  TZ=Asia/Tokyo

COPY ./my.cnf /etc/my.cnf
RUN chmod 644 /etc/my.cnf