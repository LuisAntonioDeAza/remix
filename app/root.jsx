import {
   Meta, 
   Links,
   Link,
   Outlet,
   Scripts,
   LiveReload,
   useRouteError,
   isRouteErrorResponse,
} from "@remix-run/react";

import styles from "./styles/index.css";

//MetaData
export function meta() {
   return [
      {
         title: "GuitarLa - Remix",
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
      },
   ];
}

//Importa hojas de estilos y fuentes de google
export function links() {
   return [
      {
         rel: "styleSheet",
         href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
      },
      {
         rel: "preconnect",
         href: "https://fonts.googleapis.com",
      },
      {
         rel: "preconnect",
         href: "https://fonts.gstatic.com",
         crosorgin: "true",
      },
      {
         rel: "stylesheet",
         href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
      },
      {
         rel: "StyleSheet",
         href: styles,
      },
   ];
}

//initial APP
export default function App() {
   return (
      <Document>
         <Outlet />
      </Document>
   );
}

function Document({ children }) {
   return (
      <html lang="es">
         <head>
            <Meta />
            <Links />
         </head>
         <body>
          
            {children}
         

            <Scripts />
            <LiveReload />
         </body>
      </html>
   );
}

/*** Manejo de errores */
export function ErrorBoundary() {
   const error = useRouteError();

   if (isRouteErrorResponse(error)) {
      return (
         <Document>
            <p className="error">
               {error.status} {error.statusText}  
               <br />
               <Link to="/" className="enlace-error">Ir a la paguina principal</Link> 
            </p>

            
         </Document>
      );
   }
}
