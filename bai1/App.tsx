import Home from './pages/Home';
import Weather from './components/Weather';

const WeatherWrapper: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  if (!city) return <p>Không có tên thành phố</p>;
  return <Weather city={city} />;
};

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather/:city" element={<WeatherWrapper />} />
    </Routes>
  </Router>
);

export default App;
export{};
