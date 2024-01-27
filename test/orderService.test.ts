// // In test/orderService.test.ts

// import { createOrder, getOrders } from "../src/controllers/orderController";

// describe("Order Service", () => {
//   let mockRequest: any;
//   let mockResponse: any;

//   beforeEach(() => {
//     mockRequest = {};
//     mockResponse = {
//       status: jest.fn(() => mockResponse),
//       json: jest.fn(),
//     };
//   });

//   test("Create Order - Valid Order", () => {
//     mockRequest.body = {
//       healthMartProduct: "Painkiller",
//       healthMartQuantity: 3,
//     };

//     createOrder(mockRequest, mockResponse);

//     expect(mockResponse.status).toHaveBeenCalledWith(201);
//     expect(mockResponse.json).toHaveBeenCalled();
//   });

//   test("Create Order - Invalid Order", () => {
//     mockRequest.body = {};

//     createOrder(mockRequest, mockResponse);

//     expect(mockResponse.status).toHaveBeenCalledWith(400);
//     expect(mockResponse.json).toHaveBeenCalled();
//   });

//   test("Get Orders", () => {
//     getOrders(mockRequest, mockResponse);

//     expect(mockResponse.status).toHaveBeenCalledWith(200);
//     expect(mockResponse.json).toHaveBeenCalled();
//   });
// });
