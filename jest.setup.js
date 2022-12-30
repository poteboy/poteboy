// import "@testing-library/jest-dom/extend-expect";
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    query: {},
    pathname: "",
    asPath: "",
  }),
}));
