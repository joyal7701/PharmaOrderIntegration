# Order Service with Pharmacy Integration

This project is a TypeScript application for managing orders and integrating with external pharmacies. The application allows the creation of orders with products from different pharmacies. It includes a mock integration with three pharmacies: HealthMart, CarePlus, and QuickCare.

## Features

1. **Order Service**: Create orders with products. Each order includes a generic payload and references the pharmacy order ID.
2. **Pharmacy Integration**: Mock integration with three pharmacies: HealthMart, CarePlus, and QuickCare. Each pharmacy has its own set of available products.
3. **Scalability**: The application is designed in a way that makes it easy to add new pharmacies in the future without major code changes.
4. **Clean Code and Good Practices**: The code is clean, well-structured, readable, maintainable, and follows good coding practices.
5. **Unit Tests**: Unit tests are included to ensure the functionality of the order service and the integration with different pharmacies.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository: `git clone https://github.com/joyal7701/PharmaOrderIntegration.git`
2. Navigate into the directory: `cd PharmaOrderIntegration`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

## Running the tests

This is how to run the automated tests for this system:

`npm test`
