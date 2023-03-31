import logo from './logo.svg';
import './App.css';

function App() {
  const mapRef = useRef(null);
  useEffect(() => {

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 34.425, lng: 8.787 },
      zoom: 10,
    });
    const marker = new window.google.maps.Marker({
      position: { lat: 34.425, lng: 8.787 },
      map,
      title: 'Gafsa, Tunisia',
    });
  }, []);
  return (
    <div ref={mapRef} style={{ width: '100%', height: '500px' }} />
  );
}

export default App;
