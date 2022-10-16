import "./search.scss";
import React, { useState, useRef, useEffect } from "react";
import Card_data from "../Sample";

const status = [
  { name: "All" },
  { name: "Active" },
  { name: "Upcoming" },
  { name: "Past" },
];

const level = [{ name: "Easy" }, { name: "Medium" }, { name: "Hard" }];

const Search = () => {
  const [selected, setSelected] = useState([]);
  const [sortValue,setSortValue] = useState([]);
  const [searchedWord,setSearchedWord] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [list,setList] = useState(Card_data)
  const [items,setItems] = useState([])

  const btnref = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (btnref && !btnref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
  });


  useEffect(()=>{

  if( selected.length==0 || selected.includes('All')){
    Card_data.map((elem)=>{
      if(searchedWord==""){
        elem.visible=true;
      }
      else if(searchedWord!="" && elem.name.toLowerCase().includes(searchedWord.toLocaleLowerCase())){
        elem.visible=true;
      }
      
      else{
        elem.visible=false;
      }
      
    })
  }
     else if(!selected.includes('Active') && !selected.includes('Upcoming') && !selected.includes('Past')){
    Card_data.map((elem)=>
    {
      if(selected.includes(elem.level)){
        if(searchedWord==""){
          elem.visible=true;
        }
        else if(searchedWord!="" && elem.name.toLowerCase().includes(searchedWord.toLocaleLowerCase())){
          elem.visible=true;
        }
        
        else{
          elem.visible=false;
        }
    }
    
    else{
      elem.visible=false;
    } 
  }) 
  }
  else{
    Card_data.map((elem)=>{
      if(selected.includes(elem.status)){
        if(selected.includes('Easy')|| selected.includes('Medium') || selected.includes('Hard') ){
          if(selected.includes(elem.level)){
            if(searchedWord==""){
              elem.visible=true;
            }
            else if(searchedWord!="" && elem.name.toLowerCase().includes(searchedWord.toLocaleLowerCase())){
              elem.visible=true;
            }
            
            else{
              elem.visible=false;
            }
          }
          else{
            elem.visible=false;
          }
        }
        else{
          if(searchedWord==""){
            elem.visible=true;
          }
          else if(searchedWord!="" && elem.name.toLowerCase().includes(searchedWord.toLocaleLowerCase())){
            elem.visible=true;
          }
          
          else{
            elem.visible=false;
          }
        }

       
      }
      else{
       elem.visible=false;
      }
   })

  }

  },[selected,searchedWord])



  useEffect(()=>{
    if(sortValue=="Asc"){
      Card_data.sort((a, b) => parseInt(a.created_time) - parseInt(b.created_time));
      // console.log(Card_data)
    }
    else if(sortValue=="Dec"){
      Card_data.sort((a, b) => parseInt(b.created_time) - parseInt(a.created_time));
      // console.log(Card_data)
    }
    
   } ,[sortValue])

  const handleChange = (event) => {
    const { checked, value } = event.currentTarget;

    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
  };

  const removeFilter = (e) =>{
    const checkbox= document.getElementById(e)
    checkbox.click();

  }

  return (
    <>
      <div className="heading">Explore Challenges</div>
      <div className="search">
        <i className="bi bi-search"></i>
        <input
          type="text"
          placeholder="Search"
          autoComplete="off"
          name="search"
          className="search-bar"
          onChange={(event)=>setSearchedWord(event.target.value)}
          value={searchedWord}
        />
        <div ref={btnref} className="filter" onClick={() => setIsOpen(true)}>
          <div className="filter-heading" >
            Filter <i className="bi bi-chevron-down"></i>
          </div>
          <div className={"search-filters " + (isOpen ? "open" : "closed")}>
            <div className="filter-heading">
              Filter <i className="bi bi-chevron-up"></i>
            </div>
            <div className="status">
              <div className="status-heading">Status</div>
              {status.map((e, i) => (
                <div className="status-options" key={i}>
                  <input
                    id={e.name}
                    value={e.name}
                    type="checkbox"
                    checked={selected.some((val) => val === e.name)}
                    onChange={handleChange}
                  />
                  <label htmlFor = {e.name} >{e.name}</label>
                </div>
              ))}
            </div>

            <div className="level">
              <div className="level-heading">Level</div>
              {level.map((e, i) => (
                <div key={i} className="level-options">
                  <input
                    id={e.name}
                    value={e.name}
                    type="checkbox"
                    checked={selected.some((val) => val === e.name)}
                    onChange={handleChange}
                  />
                  <label htmlFor = {e.name}>{e.name}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sort">
        <select
                className="form-select"
                aria-label="Default select example"
                defaultValue="Sort"
                onChange={(event)=>setSortValue(event.target.value)}
              >
                <option value="Sort" disabled hidden>Sort</option>
                <option value="Dec">Latest</option>
                <option value="Asc">Oldest</option>
              </select>
        </div>
      </div>

      <div className="filters-applied">
      {selected.map((e, i) => (
                <div key={i} className="each-filter">
                  <div className="filter-content">{e}</div>
                  <div className="remove-filter" onClick={()=>removeFilter(e)}><i className="bi bi-x-circle-fill"></i></div>
                  
                </div>
              ))}
      </div>
    </>
  );
};

export default Search;
