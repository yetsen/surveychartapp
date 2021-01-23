web: java $JAVA_OPTS -Xmx256m -jar target/*.jar --spring.profiles.active=prod,no-liquibase --server.port=$PORT
release: java -jar target/dependency/liquibase.jar --changeLogFile=src/main/resources/config/liquibase/master.xml --url=$JDBC_DATABASE_URL --classpath=target/dependency/postgres.jar update
