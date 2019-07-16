import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import reactMockStore from "redux-mock-store";
import { Home } from "../Home";

configure({ adapter: new Adapter() });

describe("Home", () => {
  const store = reactMockStore({
    user: {
      isFetching: false,
      info: {
        mugshot: "https://via.placeholder.com/150/92c952",
        name: "Dominic"
      }
    }
  });

  const wrapper = shallow(<Home />);

  it("render <Title /> component", () => {
    expect(wrapper.find("Title").length).toEqual(1);
  });
});
