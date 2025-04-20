import React from 'react';
import { Link } from 'react-router-dom';

const albums = [
  { id: 1, title: "Wedding Album" },
  { id: 2, title: "Birthday Album" }
];

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Photo Albums</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/album/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div> 
  );
  
}
    
export default App;