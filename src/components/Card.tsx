import type { City } from "./CityList";


const Card = ({ id, title, desc, image }: City) => {
  return (
    <div className="card" key={id}>
        <h1>{title}</h1>
        <div className="img-area">
            <img src={image} alt={title} />
            <p>{desc}</p>
        </div>
    </div>
  )
}


export default Card;