import "./Card.css"

function Card({ tempDataProp }) {
    return ( 
    tempDataProp.map((item)=>{
      const {id, desc, title, image} = item
      return (
        <div className="myCard" key={id}>
          <div className="myContainer">
            <h2>{title}</h2>
            <img className="img" src={image} alt="" />
            <div className="overlay">
              <div className="text">{desc}</div>
            </div>
          </div>
        </div>
      );
    })
  )
}

export default Card