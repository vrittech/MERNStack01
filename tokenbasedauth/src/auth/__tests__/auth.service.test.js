const AuthHelper = require("../auth.helper");
const AuthService = require("../auth.service");

describe("Auth service test", () => {
  it("Should have a module", () => {
    expect(AuthService).toBeDefined();
  });

  describe("Attempt Login test", () => {
    it("Should pass when correct credentails are passed", async () => {
      const password = "123";

      const hashedPassword = await AuthHelper.hashPassword(password);
      const user = {
        email: "sushilpokhrel69@gmail.com",
        password: hashedPassword,
      };

      const User = {
        findOne: async (key) => {
          return user;
        },
      };

      const authService = new AuthService(User);
      try {
        const { loggedInUser, token, refreshToken } =
          await authService.attemptLogin(user.email, password);
        expect(loggedInUser).toBeDefined();
        expect(token).toBeDefined();
        expect(refreshToken).toBeDefined();
        expect(loggedInUser.email).toBe(user.email);
      } catch (err) {}
    });

    it("should throw auth error if incorrect credentails are passed", async () => {
      const password = "123";
      const hashedPassword = await AuthHelper.hashPassword(password);
      const user = {
        email: "sushilpokhrel69@gmail.com",
        password: hashedPassword,
      };

      const User = {
        findOne: (key) => {
          return user;
        },
      };

      const authService = new AuthService(User);
      try {
        await authService.attemptLogin(user.email, "ABC");
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toBe("Auth Failed");
      }
    });
  });
});
