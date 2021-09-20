import React from "react";
import { shallow } from "enzyme";
//Absolute paths benefits w/global find and replace (if moving things around)
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

//wrapped is a component but w/additional functionality
let wrapped;

beforeEach(() => {
  //shallow render just component and no children
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
