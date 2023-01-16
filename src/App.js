import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const handleSumbit = async term => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSumbit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
