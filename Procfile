web: java $JAVA_OPTS -Xmx256m -jar target/*.jar --spring.profiles.active=prod --server.port=$PORT
release: cp -R src/main/resources/config config && ./mvnw -ntp liquibase:update -Pprod
