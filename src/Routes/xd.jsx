import { Card, Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Xd = ({ title, description, level, nextPath, image }) => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 max-w-md">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="mb-4">{description}</p>
          <img src={image} alt={title} className="mb-4" />
          {nextPath && (
            <Button color="secondary" onClick={() => navigate(nextPath)}>
              Ir a {title.replace(/ SSJ \d+$/, '')} SSJ {level + 1}
            </Button>

          )}
        </Card>
      </motion.div>
    </div>
  )
}

export default Xd
