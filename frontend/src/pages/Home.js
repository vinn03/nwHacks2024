import React from 'react';
import '../css/Home.css';
import RouteForm from '../components/routeform';

// function navLink({to, children}) {
//   return (
//     <Link to={to}>
//       <button>
//         {children}
//       </button>
//     </Link>
//   );
// }

export default function Home() {
  return (
    <div class="Home">
      <header id="home-header">
        <h1>Routemaxxer</h1>
      </header>
      <body>
        <div id="location-container">
          <RouteForm></RouteForm>
        </div>
      </body>
    </div>
  );
}
