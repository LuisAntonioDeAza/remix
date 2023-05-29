import { React, useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { getCountry, searchAndDelete } from "~/Models/guitarras.server.js";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";



const Search = () => {
   const [array, setArray] = useState([]);
   const [country, setCountry] = useState("");

   const api = async (e) => {
      e.preventDefault();
      const respuesta = await fetch(`https://strapi-70ig.onrender.com/api/fbs?filters[city]=${country}`);
      const r = await respuesta.json();

      setArray(r.data);
   };

   return (
      <div className="contenedor">
         <label>Ciudad: </label>
         <input className="ipt" onChange={(e) => setCountry(e.target.value)} />

         <button onClick={(e) => api(e)}>buscar</button>

         {array.length && (
            <div className="guitarras-grid">
               {array.map((perfiles) => (
                  <div key={perfiles.id}>
                     <p>
                        {perfiles.attributes.Email} / {perfiles.attributes.pass}
                     </p>
                     <p>*********************{perfiles.attributes.city}***********************</p>
                  </div>
               ))}
            </div>
         )}

       
      </div>
   );
};

export default Search;
