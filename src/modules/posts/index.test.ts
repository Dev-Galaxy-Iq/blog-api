import { describe, expect, it } from "bun:test";
import { api } from "../../app";

describe("GET /posts", () => {
  it("returns list of posts", async () => {
    const { data } = await api.posts.get({
      query: {
        page: 1,
        size: 5
      }
    })

    expect(data)
  })
})
