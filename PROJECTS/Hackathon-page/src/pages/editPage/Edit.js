import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import { useNavigate } from "react-router-dom";
import "./edit.scss";
import Card_data from "../../components/Sample";
import image from "../../assets/icons/bi_image-fill.svg";


const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState(searchParams.get("id"));

  const data = Card_data.filter((e) => {
    return e.id == id;
  })[0];


  const [name, setName] = useState(data.name);
  const [start, setStart] = useState(new Date(data.start_time));
  const [end, setEnd] = useState(new Date(data.end_time));
  const [src, setSrc] = useState(data.image);
  const [descr, setDescr] = useState(data.desc);
  const [level, setLevel] = useState(data.level);
  const [overView, setOverView] = useState(data.overview);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const editData = (e) => {
    e.preventDefault();
    const details = {
      id: new Date().getTime().toString(),
      image: src,
      name: name,
      desc: descr,
      level: level,
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      status: "",
      visible: true,
      overview: overView,
      created_time: new Date().getTime(),
    };

    if (details.name != "" && details.desc != "" && details.src != "") {
    //   Card_data.push(data);
      const oldData = Card_data.filter((e) => {
        return e.id !== id;
      });
      
      const index = Card_data.findIndex((e) => {
        return e.id === id;
      });


      oldData.splice(index, 0, details);
      Card_data.length=0;
      oldData.map((e)=>{
        Card_data.push(e);
      })




        navigate('/');
    }
  };

  const previewImage = () => {
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
              <label className="myLabel">
                <input
                  id="uploadImage"
                  type="file"
                  name="myImage"
                  placeholder="Change Image"
                  required
                  accept="image/png, image/gif, image/jpeg"
                  onChange={() => previewImage()}
                />
                <div> <img src={image} alt="" /> Change image</div>
              </label>
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

          <input type="submit" value="Create Challenge" onClick={editData} />
        </form>
      </div>
    </>
  );
};

export default Edit;
