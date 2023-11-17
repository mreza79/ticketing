import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";

it("returns a 404 if the ticket is not found", async () => {
  const randomId = new mongoose.Types.ObjectId().toHexString();

  await request(app).get(`/api/tickets/${randomId}`).send().expect(404);
});

it("returns the ticket if the ticket is found", async () => {
  const title = "concert";
  const price = 20;

  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", signin())
    .send({
      title,
      price,
    })
    .expect(201);

  const ticketRepsonse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200);

  expect(ticketRepsonse.body.title).toEqual(title);
  expect(ticketRepsonse.body.price).toEqual(price);
});
