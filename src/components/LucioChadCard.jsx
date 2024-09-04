import { Card, Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

const LucioChadCard = ({ title, description, level, onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 max-w-md">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-4">{description}</p>
        {onNext && (
          <Button color="primary" onClick={onNext}>
            Ir a {title} SSJ {level + 1}
          </Button>
        )}
      </Card>
    </motion.div>
  );
};

export default LucioChadCard;
