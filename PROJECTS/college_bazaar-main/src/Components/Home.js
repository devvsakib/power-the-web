import React from "react";
import Acard from "./Acard";
import Card from "./Card";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
var sectionStyle = {
  backgroundImage: `url('https://images.unsplash.com/photo-1620315808304-66597517f188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80') `,
  height: `350px`,
};

function Home() {
  const [{store}] = useStateValue();

  return (
    <div>
      <div className="bg-image " style={sectionStyle}></div>

      <h1 className="my-2">Enjoy Shoping</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
       
      {store.map(item =>(
        <Card
        image={item.image}
        title={item.title}
        phone={item.phone}
        price={item.price}
        id={item.id}
        t={item.t}
        />

      ))}

        <Card 
        image='https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80'
        title="HeadPhone"
        phone="+91-7817890372"
        price="500"
        id='34'
        />
        <Card 
        image='https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80'
        title="HeadPhone"
        phone="+91-7817890372"
        price="500"
        id='34'/>
        <Card id='1'/>
        <Card id='2'/>
        <Card id='3' />
        <Link to="/add" style={{ textDecoration: "None" }}>
        <Acard/>
        </Link>
      </div>
    </div>
  );
}

export default Home;
