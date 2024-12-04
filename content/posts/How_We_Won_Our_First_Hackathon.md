+++

title = "How We Won Our First Hackathon: Unlocking Data Connections with the XFSC Catalog"
date = "2024-12-04"
description = "Exploring the design and implementation of a scalable graph database for credential management with domain-specific metadata."
tags = ["Graph Database", "Neo4j", "MongoDB", "FastAPI", "Docker", "Mage AI", "Postman"]
weight = 2

[cover]
image = "img/FotoHackaton.jpg"  # Path to the image
relative = true  # Use relative path
+++

## Introduction

I had the opportunity to participate in my first hackathon, and the last thing I expected was to actually win a prize. Our challenge was to build a solution that would improve the scalability and usability of a graph database catalog. I had the pleassure to work with an incredible team, **Alejandro**, **Elena**, **Urtza** and **Gorka**.

The **XFSC Catalog** project addresses these needs by developing a scalable graph database that can handle domain-specific metadata for credentials. Leveraging state-of-the-art technologies like **Neo4j**, **MongoDB**, **FastAPI**, and **Mage AI**, this project is a robust solution for indexing, querying, and managing complex relationships between data elements.

This post provides an overview of the project's structure, key components, and the tools employed to achieve its objectives. More importantly, this was the solution that led us to win our first hackathon!

## 🚀 Project Overview

The **XFSC Catalog** project focuses on creating a modular, scalable, and efficient environment for managing credentials with extended metadata. It integrates multiple services into a unified architecture using **Docker Compose**, ensuring seamless deployment and management.

### 🛠️ Tools and Technologies Used

#### Neo4j
- **Purpose**: Acts as the core graph database, allowing for visualization and querying of interrelated data.
- **Access**: [Neo4j Browser](http://localhost:7474/browser/) (Credentials: `neo4j/upmgaiax`)

#### MongoDB + Mongo Express
- **Purpose**: MongoDB stores JSON documents and generates unique identifiers (UUIDs). Mongo Express provides an intuitive interface for managing MongoDB.
- **Access**: [Mongo Express](http://localhost:8081/)

#### FastAPI
- **Purpose**: Provides a REST API to interact with Neo4j and MongoDB, ensuring efficient communication between components.
- **Access**: [Interactive Documentation](http://localhost:8000/docs)

#### Mage AI
- **Purpose**: An orchestration tool for building, monitoring, and optimizing data pipelines.
- **Overview**: Mage AI simplifies the orchestration of complex workflows, enabling seamless integration between services and improving overall system performance. It provides tools to design and execute scalable data pipelines, making it a perfect fit for the XFSC Catalog.

#### Postman Integration
- **Purpose**: A Postman collection is provided to automate the API requests. This enables the workflow to upload data sequentially to CES, MongoDB (with the same UUID), and finally to Neo4j for graph visualization. This ensures seamless data consistency and integration.

## 💡 Key Features

1. **Graph-Based Data Storage**: The use of Neo4j ensures efficient indexing and querying of interconnected data, offering scalability and flexibility for various domain-specific use cases.
2. **Integrated JSON Storage**: MongoDB complements the system by providing a robust document-based storage solution.
3. **Modular API Design**: FastAPI enables modular and extensible interactions with the database components.
4. **Simplified Orchestration**: Mage AI adds a layer of automation and optimization for managing workflows and data pipelines.
5. **Postman Automation**: The Postman collection helps automate the sequential data submission process, ensuring data integrity across CES, MongoDB, and Neo4j.

## 🛠️ Installation and Access

### Installation Steps
1. Ensure you have **Docker** and **Docker Compose** installed.
2. Deploy the environment using the following command:

```bash
docker compose up -d
```

### Access Points
- **Mongo Express**: [http://localhost:8081/](http://localhost:8081/)
- **FastAPI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **Neo4j**: [http://localhost:7474/browser/](http://localhost:7474/browser/) (Credentials: `neo4j/upmgaiax`)

## 🛠️ Challenges and Solutions

One of the core challenges was ensuring proper integration between the components. Establishing communication between **MongoDB**, **Neo4j**, and **FastAPI** required precise API designs and efficient handling of data pipelines. With **Mage AI**, we streamlined these workflows, improving reliability and scalability. Additionally, **Postman** was instrumental in automating the process, ensuring each component received and processed the data consistently.

## 🌟 Conclusion

Participating in this hackathon has been an incredible experience. Winning a prize in my first hackathon was something I never imagined, but beyond the recognition, what truly stood out to me was the learning journey. Over these few days, I learned more than I could have ever expected. I got hands-on experience with numerous tools that are widely used in the industry, such as **Neo4j**, **MongoDB**, **FastAPI**, **Docker**, **Mage AI**, and **Postman**. The opportunity to work intensively as part of a team and solve complex problems has been invaluable. I am now more motivated than ever and open to participating in more experiences like this in the future.