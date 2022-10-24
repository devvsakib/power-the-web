import React from 'react';
import WebDisplay from './WebDisplay';
import './App.css';
import logo from "./Grannys_Advice_Transparent.png";
import hack_logo from "./Illuminati_Final.png";

class App extends React.Component {

    constructor() {
      super();
        this.state = {
            symptoms: "",
            disease: "",
            homeRemedy: ""
        }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      var {name,value} = event.target;
      this.setState({[name]: value});
    }

    handleSubmit(event) {
      var symptoms = this.state.symptoms.toLowerCase();
      if(symptoms === "cough") {
        this.setState({
          disease:
            "This could be due to Viral infection or Bacterial infection.",
        });
        this.setState({
          homeRemedy: "You can use Honey and ginger syrup as home remedies.",
        });
      }

      if (symptoms === "nose blockage") {
        this.setState({
          disease:
            "This could be due to Viral infection or Bacterial infection.",
        });
        this.setState({
          homeRemedy: "You can use Honey and ginger syrup as home remedies.",
        });
      }

      if (symptoms === "sprain") {
        this.setState({
          disease: "This could be due to Sudden jerk given to muscle.",
        });
        this.setState({ homeRemedy: "You can use Icing as home remedies." });
      }

      if (symptoms === "fever") {
        this.setState({
          disease:
            "This could be due to Viral infection or Bacterial infection.",
        });
        this.setState({
          homeRemedy:
            "You can use Cold strips application and crocine as home remedies.",
        });
      }

      if (symptoms === "stomach ache") {
        this.setState({
          disease:
            "This could be due to Eating stale food, ringworms, acidity or bacterial infection.",
        });
        this.setState({
          homeRemedy: "You can use Jeera with boiled water as home remedies.",
        });
      }

      event.preventDefault()
    }

    render() {

      return (
        <div>
          <img src={logo} id="logo" alt="logo" />
          <div id="body">
            <WebDisplay
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              disease={this.state}
            />
            <div className="outputDiv">
              What caused the symptom:{" "}
              <span className="output">{this.state.disease}</span>
              <br />
              Remedies: <span className="output">{this.state.homeRemedy}</span>
            </div>
          </div>
          <img src={hack_logo} id="hack_logo" alt="hack_logo" />
        </div>
      );
    }
}

export default App;