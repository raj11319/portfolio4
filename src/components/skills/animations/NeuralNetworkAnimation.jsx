import React from 'react'
import { motion } from 'framer-motion'

const NeuralNetworkAnimation = () => {
  const nodeCount = 10
  const connectionCount = 15
  
  const getRandomPosition = () => {
    return {
      x: Math.random() * 100,
      y: Math.random() * 100
    }
  }
  
  // Generate nodes
  const nodes = Array.from({ length: nodeCount }, () => getRandomPosition())
  
  // Generate connections
  const connections = Array.from({ length: connectionCount }, () => {
    return {
      from: Math.floor(Math.random() * nodeCount),
      to: Math.floor(Math.random() * nodeCount)
    }
  })

  return (
    <div className="w-full h-full relative">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Connections */}
        {connections.map((connection, index) => (
          <motion.line
            key={`connection-${index}`}
            x1={nodes[connection.from].x}
            y1={nodes[connection.from].y}
            x2={nodes[connection.to].x}
            y2={nodes[connection.to].y}
            stroke="#3B82F6"
            strokeWidth="0.5"
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, 0.5, 0.1],
              strokeWidth: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.1
            }}
          />
        ))}
        
        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.circle
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r="2"
            fill="#3B82F6"
            initial={{ opacity: 0.5, r: 1 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              r: [1, 2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.1
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default NeuralNetworkAnimation