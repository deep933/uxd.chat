import React from "react";
import Trix from "trix";
import "../styles/trix.css";

const Write = props => {
  return (
    <div className="write flx-hor-center">
      <div className="card mgn-20" style={{ display: "block" ,width:800+"px"}}>
        <div className="card-content pad-15">
          <form>
            <input
              id="x"
              value="Editor content goes here"
              type="hidden"
              name="content"
            />
            <trix-editor input="x"></trix-editor>
          </form>{" "}
        </div>
      </div>
    </div>
  );
};

export default Write;
