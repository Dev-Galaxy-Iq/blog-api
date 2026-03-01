import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { api } from "../../app";
import { db } from "../../lib/db";

describe("POST /auth/register", () => {
  beforeAll(async () => {
    await db.user.deleteMany({ where: { email: "unit-test@gmail.com" } });
  });

  afterAll(async () => {
    await db.user.deleteMany({ where: { email: "unit-test@gmail.com" } });
  });

  it("creates a new account", async () => {
    const { data, error } = await api.auth.register.post({
      email: "unit-test@gmail.com",
      password: "123456789",
      username: "unittestuser",
      name: "Test User",
    });

    expect(error).toBeNull();
    expect(data?.data.id).toBeDefined()
  });

  it("rejects duplicate email/username", async () => {
    const { data, error } = await api.auth.register.post({
      email: "unit-test@gmail.com",
      password: "123456789",
      username: "unittestuser",
      name: "Test User",
    });

    expect(error).not.toBeNull();
  });
});
