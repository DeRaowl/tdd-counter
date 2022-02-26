import { render, screen } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import Counter from "./component/Counter";
import App from "../src/App";

describe("Counter App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test("Render the counter component", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter");
  });

  test("Render Incr button", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("Initial  value of state", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });
  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("Render 0 if value on decrement counter is less then 0", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
