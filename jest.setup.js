import { server } from "@/tests/msw/server";
import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";

window.scrollTo = jest.fn();
window.alert = jest.spyOn(window, "alert").mockImplementation(() => {});

beforeAll(() => server.listen());

afterEach(() => {
  jest.clearAllMocks();
  server.resetHandlers();
});

afterAll(() => server.close());
