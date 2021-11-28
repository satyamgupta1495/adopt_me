import { Link } from "react-router-dom";

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.breed),
//   ]);
// };

const Pet = ({ name, animal, location, breed, images, id }) => {
  let hero = "http://pets-v2.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link href= {`/details/${id}`} className="pet">
      <div className= "image-container">
        <img src={hero} alt={name}/>
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
        </div>
      
    </Link>
  );
};

export default Pet;
