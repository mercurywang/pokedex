## 1. In the Java ecosystem, there are several tools available for linting, testing, and building projects. Here are the tools we have chosen for each of these steps:

### 1.1 Linting:

Checkstyle: Checkstyle is a popular linting tool for Java that enforces a coding standard. It can check your code against various coding conventions and style guidelines.

### 1.2 Testing:

JUnit: JUnit is the most widely used testing framework for Java. It allows you to write unit tests to ensure that individual components of your code work as expected.

### 1.3 Building:

Apache Maven: Maven is a popular build automation tool that manages the build lifecycle of a Java project. It can handle project dependencies, compilation, packaging, and more through configuration in a pom.xml file.

## 2. There are several alternatives to Jenkins and GitHub Actions for setting up CI/CD pipelines. Here are some popular alternatives:

### 2.1 Travis CI:

Travis CI is a cloud-based CI/CD service that integrates with GitHub and Bitbucket. It's easy to configure and supports a wide range of programming languages and platforms. Travis CI also provides a marketplace for various extensions.

### 2.2 CircleCI:

CircleCI is a cloud-based CI/CD platform that allows you to build, test, and deploy your applications. It offers flexibility and scalability, and it integrates well with popular version control systems like GitHub and Bitbucket.

### 2.3 GitLab CI/CD:

GitLab offers built-in CI/CD capabilities as part of its DevOps platform. It's a great choice if you're already using GitLab for source code management and collaboration.

### 2.4 Bamboo:

Atlassian's Bamboo is a CI/CD server that is suitable for organizations using other Atlassian products like Jira and Bitbucket. It offers strong integration with these tools.

## 3. Deciding between a self-hosted and a cloud-based environment depends on various factors, such as Cost, Scalability, Maintenance and Management, Redundancy and High Availability, Security.

Base on the project volume that we have a team of about 6 people, we would consider to setup with a self-hosted environment.
