import { useParams } from "react-router-dom";
import { getDog } from "../dogData"; 
const Dog = () => {
   let params = useParams();
   let dog = getDog(params.name);
   return (
      <main style={{ padding: "1rem"}}>
         <h2>Name: {dog.name}</h2>
         <h2>Age: {dog.age}</h2>
         <img style={{width: "300px"}} src={dog.src} alt={dog.name} />
         <ul>
            {dog.facts.map(fact => {
               return <li style={{ textAlign: "left"}}>{fact}</li>
            })}
         </ul>
      </main>
   )
}
export default Dog;