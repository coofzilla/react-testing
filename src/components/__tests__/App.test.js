import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";

//wrapped is a component but w/additional functionality
it("shows a comment box", () => {
  //shallow render just component and no children
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);
});
