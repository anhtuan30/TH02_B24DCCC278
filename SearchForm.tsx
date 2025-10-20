import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm: React.FC = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/weather/${encodeURIComponent(city.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Nhập tên thành phố"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <button type="submit">Xem thời tiết</button>
    </form>
  );
};

export default SearchForm;
export{};