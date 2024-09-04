import LucioChadCard from './LucioChadCard';
import { useNavigate } from 'react-router-dom';

const TransformationSection = ({ transformation }) => {
  const navigate = useNavigate();
  const { title, description, level, nextPath } = transformation;

  const handleNext = () => {
    if (nextPath) navigate(nextPath);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <LucioChadCard
        title={title}
        description={description}
        level={level}
        onNext={handleNext}
      />
    </div>
  );
};

export default TransformationSection;
