FROM eclipse-temurin:17-jdk-jammy

LABEL authors="no-country-s14-11-m-java"

EXPOSE 8080

WORKDIR /app

# Copy the source code
COPY src ./src
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Build the application
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

# Run the application
CMD ["java", "-jar", "target/edtech-0.0.1-SNAPSHOT.jar"]