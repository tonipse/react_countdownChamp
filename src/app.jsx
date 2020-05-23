import React, { Component } from "react";
import Clock from "./clock";
import "./css/app.css";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         deadline: "December 25, 2020",
         newDeadline: "",
      };
   }
   changeDeadline() {
      this.setState({
         deadline: this.state.newDeadline,
      });
   }
   render() {
      return (
         <div className="app">
            <div className="app-title">Coundown to {this.state.deadline}</div>
            <Clock deadline={this.state.deadline} />
            <Form inline className="center">
               <FormControl
                  className="deadline-input"
                  plachholder="new date"
                  onChange={(event) =>
                     this.setState({
                        newDeadline: event.target.value,
                     })
                  }
               />
               <Button onClick={() => this.changeDeadline()}>Submit</Button>
            </Form>

            <footer class="page-footer font-small blue">
               <div class="footer-copyright text-center py-3">
                  <p> © 2020 Copyright: Toni Peise </p>
               </div>
            </footer>
         </div>
      );
   }
}
export default App;
