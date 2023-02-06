import { useState } from 'react';
import './index-sass/index.css';
import Rating from './components/Rating';

function App() {
  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <Rating />
  );
}

export default App;
