import { Outlet, Link } from "react-router-dom";

import { getDogs } from "../dogData";
const DogList = () => {
   let dogs = getDogs();
   return (
      <main style={{ display: "flex" }}>
         <nav 
            style={{
               borderRight: "solid 1px",
               padding: "1rem"
            }}
         >
            {dogs.map(dog => {
               return <Link 
                        style={{
                            display: "block", 
                            margin: "1rem 0"
                        }}
                        to={`/doglist/${dog.name}`}
                        key={dog.name}
                        >
                           {dog.name}
                      </Link>
            })}
         </nav>
         <Outlet />
      </main>
   )
}
export default DogList;