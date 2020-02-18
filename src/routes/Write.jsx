import React from "react";
import Trix from "trix";
import "../styles/trix.css";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const Write = props => {
  return (
    <div className="write flx-hor-center">
      <div className="card mgn-20" style={{ display: "block" ,width:800+"px"}}>
        <div className="card-content pad-15">
        <Picker set='emojione' />

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
