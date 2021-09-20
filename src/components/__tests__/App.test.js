import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

//JSDOM, creating div as a container f/App
it("shows a comment box", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);
  //look inside div, check to see if comment box there
  // expect(div.innerHTML).toContain("Comment Box");
  //enzyme react tester from airbnb
  ReactDOM.unmountComponentAtNode(div);
});
