import request from "supertest";
import app from "../src/app";

describe("GET /pharmacy", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/pharmacy");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);

    // Check that each item in the response array has the expected structure
    res.body.forEach((item: any) => {
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("address");
      expect(item).toHaveProperty("integrationName");
      // Add more assertions as needed based on the structure of your data
    });
  });
});
