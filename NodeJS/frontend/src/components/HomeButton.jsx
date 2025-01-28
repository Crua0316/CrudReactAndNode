import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-secondary"
      onClick={() => navigate('/')}
      style={{ marginBottom: '15px' }}
    >
      🏠 Volver a Home
    </button>
  );
};

export default HomeButton;
