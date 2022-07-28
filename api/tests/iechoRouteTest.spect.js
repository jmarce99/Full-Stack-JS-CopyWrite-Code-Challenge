const request = require("supertest");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();

chai.use(chaiHttp);

const app = require("../src/app.js");

describe("TEST GET ROUTE", () => {
  it("should return the reversed text", (done) => {
    request(app)
      .get("/iecho?text=test")
      .expect(200)
      .expect({
        text: "tset",
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it('should return the flag "palindrome" if is a palindrome', (done) => {
    request(app)
      .get("/iecho?text=racecar")
      .expect(200)
      .expect({
        text: "racecar",
        palindrome: true,
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it('should return a status 400 if error has occurred or not text received', (done) => {
    request(app)
      .get("/iecho")
      .expect(400)
      .expect({
        error: "no text",
      })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
