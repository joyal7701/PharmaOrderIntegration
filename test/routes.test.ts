import request from "supertest";
import app from "../src/app";

describe("GET /pharmacy", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/pharmacy");
    expect(res.statusCode).toEqual(200);
  });
});
