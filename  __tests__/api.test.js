const Axios = require("axios");

jest.mock("axios");

describe("Api Tests", () => {
  it("Get - Network Success", async () => {
    Axios.get = jest.fn().mockResolvedValueOnce({ data: "value" });
    expect(
      await Axios.get("https://sendmyvideos.typicode.com/videos/100")
    ).toEqual({ data: "value" });
  });

  it("Get - Network Failure with 404 status", async () => {
    const axiosResponse = { response: { status: 404 } };
    Axios.get = jest.fn().mockRejectedValueOnce(axiosResponse);
    let response;
    try {
      response = await Axios.get(
        "https://sendmyvideos.typicode.com/videos/100"
      );
    } catch (e) {
      response = e;
    }

    expect(response).toEqual(axiosResponse);
  });
});
