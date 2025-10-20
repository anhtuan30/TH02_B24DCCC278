import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherData } from '../types/Weather';

interface WeatherProps {
  city: string;
}

const Weather: React.FC<WeatherProps> = ({ city }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get<WeatherData>(`https://wttr.in/${city}?format=j1`);
        setWeather(res.data);
      } catch {
        setError('Không thể lấy dữ liệu thời tiết');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>{error}</p>;
  if (!weather) return <p>Không có dữ liệu</p>;

  const current = weather.current_condition[0];

  return (
    <div>
      <h2>Thời tiết tại {city}</h2>
      <p>Nhiệt độ: {current.temp_C}°C</p>
      <p>Tình trạng: {current.weatherDesc[0].value}</p>
    </div>
  );
};

export default Weather;
export{};