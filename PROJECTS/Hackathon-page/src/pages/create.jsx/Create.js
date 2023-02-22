import React, { useState, useEffect } from "react";
import DateTimePicker from "react-datetime-picker";
import "./create.scss";
import Card_data from "../../components/Sample";
import { useNavigate } from "react-router-dom";
import image from '../../assets/cardimage/image5.png'
import image2 from '../../assets/icons/bxs_cloud-upload.svg'


const Create = () => {
  const [name, setName] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [src, setSrc] = useState('');
  const [descr, setDescr] = useState("");
  const [level, setLevel] = useState("Easy");
  const [overView, setOverView] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const addData = (e) => {
    // e.preventDefault();
    const data = {
      id: new Date().getTime().toString(),
      image: src,
      name: name,
      desc: descr,
      level: level,
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      status: "",
      visible:true,
      overview: overView,
      created_time: (new Date()).getTime()
      
    };

    if (data.name != "" && data.desc != "" && data.image != "") {
      Card_data.push(data);
      // console.log(Card_data);
      navigate('/');
    }
  };
  const previewImage=()=> {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
        setSrc(oFREvent.target.result);
    };
};

  return (
    <>
      <div className="details">
        <div className="header-section">Challenge Details</div>
        <form className="details-section">
          <div className="name">
            <div className="heading">Challenge Name</div>
            <div className="value">
              <input
                type="text"
                placeholder="Enter name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>

          <div className="date">
            <div className="heading">Start date</div>
            <div className="value">
              <DateTimePicker
                required
                format="dd/MM/y h:mm:ss a"
                placeholderText="hi"
                onChange={(event) => setStart(event)}
                value={start}
              />
            </div>
          </div>

          <div className="date">
            <div className="heading">End date</div>
            <div className="value">
              <DateTimePicker
                required
                format="dd/MM/y h:mm:ss a"
                onChange={(event) => setEnd(event)}
                value={end}
              />
            </div>
          </div>

          <div className="description">
            <div className="heading">Description</div>
            <div className="value">
              <textarea
                required
                onChange={(event) => setDescr(event.target.value)}
                value={descr}
              ></textarea>
            </div>
          </div>

          <div className="overview">
            <div className="heading">Overview</div>
            <div className="value">
              <textarea
                required
                onChange={(event) => setOverView(event.target.value)}
                value={overView}
              ></textarea>
            </div>
          </div>

          <div className="uploadImage">
            <div className="heading">Image</div>
            <div className="value">
            <img src={src} alt="" id="uploadPreview" />
              <input
                id="uploadImage"
                type="file"
                name="myImage"
                required
                accept="image/png, image/gif, image/jpeg"
                onChange={()=>previewImage()}
              />
            </div>
          </div>

          <div className="level">
            <div className="heading">Level</div>
            <div className="value">
              <select
                className="form-select"
                aria-label="Default select example"
                value={level}
                onChange={(event) => setLevel(event.target.value)}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <input type="submit" value="Create Challenge" onClick={addData} />
        </form>
      </div>
    </>
  );
};

export default Create;
