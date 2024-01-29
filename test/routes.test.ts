import request from "supertest";
import app from "../src/app";

describe("GET /pharmacy", () => {
  // Test case to verify that the /pharmacy endpoint returns a 200 OK status code.
  it("should return 200 OK", async () => {
    const res = await request(app).get("/pharmacy");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);

    // Asserts that each item in the response body has the required properties.
    res.body.forEach((item: any) => {
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("address");
      expect(item).toHaveProperty("integrationName");
    });
  });
});
