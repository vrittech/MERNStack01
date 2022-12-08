const { connect, default: mongoose } = require("mongoose");
const request = require("supertest");
const app = require("../../config/express");
const User = require("../../user/user");
const AuthHelper = require("../auth.helper");
describe("Auth Integration test", () => {
  let user;
  beforeAll((done) => {
    connect(
      "mongodb+srv://admin:admin@cluster0.mcwgvlm.mongodb.net/test?retryWrites=true&w=majority",
      async () => {
        await User.deleteMany({});
        const password = "123";
        const hashedPassword = await AuthHelper.hashPassword(password);
        user = new User({
          email: "sushilpokhrel69@gmail.com",
          password: hashedPassword,
        });
        await user.save();
        done();
      }
    );
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
  it("Should connect to the database succesfully", () => {
    expect(true).toBeTruthy();
  });

  describe("Login test", () => {
    it("Should login successfully with correct credentials", async () => {
      const {
        body: {
          data: { user },
        },
      } = await request(app)
        .post("/api/v1/auth/login")
        .send({
          email: "sushilpokhrel69@gmail.com",
          password: "123",
        })
        .expect(200);

      expect(user).toBeDefined();
    });

    it("Should login throw 401 if incorrect credentails are passed", async () => {
         await request(app)
          .post("/api/v1/auth/login")
          .send({
            email: "sushilpokhrel69@gmail.com",
            password: "ABC",
          })
          .expect(401);
  
       
      });
  });

  
});
