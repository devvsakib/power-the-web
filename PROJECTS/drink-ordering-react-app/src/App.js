import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: "Add Entry",
      title2: "Entries",
      act: 0,
      index: "",
      datas: [
        { name: "Jack", cocktailName: "Malta", points: "2" },
        { name: "Rob", cocktailName: "Malta", points: "2" },
        { name: "Harry", cocktailName: "Malta", points: "2" },
        { name: "Himesh", cocktailName: "Malta", points: "2" },
      ],
    };
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("try");

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let cocktailName = this.refs.cocktailName.value;
    let points = this.refs.points.value;

    if (this.state.act === 0) {
      let data = {
        name,
        cocktailName,
        points,
      };
      datas.push(data);
    } else {
      let index = this.state.index;
      datas[index].name = name;
      datas[index].cocktailName = cocktailName;
      datas[index].points = points;
      document.getElementById("resetafteredit").innerHTML = "Add";
    }

    this.setState({
      datas: datas,
      act: 0,
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  handleReset = () => {
    this.refs.myForm.reset();
  };

  handleRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas,
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  handleEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.cocktailName.value = data.cocktailName;
    this.refs.points.value = data.points;
    document.getElementById("resetafteredit").innerHTML = "Update";

    this.setState({
      act: 1,
      index: i,
    });

    this.refs.name.focus();
  };
  render() {
    let datas = this.state.datas;
    return (
      <div className="outter">
        <div className="nav">
          <h2>Baristo</h2>
        </div>

        <div className="mainlayout">
          <div className="entryDiv">
            {" "}
            <form ref="myForm" className="myForm">
              <h1>{this.state.title1}</h1>
              <div>
                {" "}
                <div className="entername">
                  {" "}
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    ref="name"
                    placeholder="Enter your name"
                    className="formField"
                    min="3"
                    max="10"
                    maxlength="30"
                    required
                  />
                </div>
                <div className="entercocktail">
                  {" "}
                  <label htmlFor="">Select cocktail</label>
                  <select
                    type="select"
                    name="selection"
                    ref="cocktailName"
                    placeholder="Cocktails"
                    min="0"
                    max="10"
                    className="formField"
                    maxlength="30"
                    required
                  >
                    <option value="Malta">Malta</option>
                    <option value="Santrá">Santrá</option>
                    <option value="Sönfee">Sönfee</option>
                  </select>
                </div>
                <div className="enterpoints">
                  <label htmlFor="">Points (0 to 10)</label>
                  <input
                    required
                    type="number"
                    ref="points"
                    placeholder="Give points"
                    className="formField"
                    min="0"
                    max="10"
                    maxlength="30"
                  />
                </div>
              </div>
              <div className="addentrybutton">
                <button
                  type="submit"
                  onClick={(e) => this.handleSubmit(e)}
                  className="myButton"
                  id="resetafteredit"
                >
                  Add{" "}
                </button>
                <button
                  onClick={(e) => this.handleReset(e)}
                  className="myButton"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          <div className="entriesDiv">
            <pre>
              <h1>{this.state.title2}</h1>
              <div className="cocktailpoints">
                <div id="Maltapoint">#1 Malta()</div>
                <div class="list_leaderItem__2_UTL">#2 Santrá()</div>
                <div class="list_leaderItem__2_UTL">
                  #3 Sönfee({this.state.points})
                </div>
              </div>
              <div className="Lhead">
                <div>Name</div>
                <div>Cocktail</div>
                <div>Points Given</div>
                <div>Action</div>
              </div>
              <div className="scroll">
                {datas.map((data, i) => (
                  <div className="finalEntries">
                    <li key={i} className="myList">
                      <div>{data.name}</div> <div>{data.cocktailName}</div>{" "}
                      <div>{data.points}</div>
                      <div id="editing">
                        <button onClick={() => this.handleEdit(i)}>
                          Edit{" "}
                        </button>

                        <button onClick={() => this.handleRemove(i)}>
                          Delete{" "}
                        </button>
                      </div>
                    </li>
                  </div>
                ))}
              </div>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
