// App.js
// import React, { Component, useState } from 'react';
// import './App.css';
// import Fun from './greet'; // Assuming that your component file is named 'greet.js'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* Use the imported Fun component as JSX element */}
//         <Fun name="Mohsin" />
//         <Fun name="Zeeshan" />
//         <Fun name="Amal" />
//       </div>
//     );
//   }
// }

// export default App;
// import React, { useState } from 'react';

// function ExampleComponent() {
//   // Declare a state variable named "count" with an initial value of 0
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       {/* onClick event updates the state using setCount */}
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// export default ExampleComponent;
// App.js
// App.js
import { divIcon } from 'leaflet';
import React, { useState } from 'react';
// import HeatmapExample from './map';  // Ensure correct path to HeatmapExample file
import {Map, MapContainer, TileLayer} from 'react-leaflet'
const App = () => {
  const [center,setCenter]=useState({lat: 13.998,lon: 14.887});
  const ZOOM_LEVEL =9;
  return (
    <div>
      <Map
      center={center}
      zoom={ZOOM_LEVEL}
      >
        <TileLayer url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=CFOhoZzhm8gZyCm9DOZN" attribution="&copy; <a href="https://www.maptiler.com/">Maptiler</a> &copy">
      </Map>
    </div>
  );
};

export default App;
