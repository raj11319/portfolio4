import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  NeuralNetworkAnimation, 
  ChartsAnimation,
  ChatbotAnimation,
  GraphAnimation,
  WireframeAnimation,
  BlockchainAnimation,
  MobileAppAnimation,
  SecurityAnimation,
  ApiAnimation,
  SystemDesignAnimation,
  ThreeDObjectAnimation,
  CloudAnimation,
  ComponentsAnimation,
  PipelineAnimation,
  CloudServicesAnimation,
  FlowchartAnimation,
  ChecklistAnimation,
  CollaborationAnimation,
  AgenticAIAnimation
} from './animations'

const SkillCard = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false)
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const getAnimation = (type) => {
    const animationMap = {
      neuralNetwork: <NeuralNetworkAnimation />,
      charts: <ChartsAnimation />,
      chatbot: <ChatbotAnimation />,
      graph: <GraphAnimation />,
      wireframe: <WireframeAnimation />,
      blockchain: <BlockchainAnimation />,
      mobileApp: <MobileAppAnimation />,
      security: <SecurityAnimation />,
      api: <ApiAnimation />,
      systemDesign: <SystemDesignAnimation />,
      '3dObject': <ThreeDObjectAnimation />,
      cloud: <CloudAnimation />,
      components: <ComponentsAnimation />,
      pipeline: <PipelineAnimation />,
      cloudServices: <CloudServicesAnimation />,
      flowchart: <FlowchartAnimation />,
      checklist: <ChecklistAnimation />,
      collaboration: <CollaborationAnimation />,
      agenticAI: <AgenticAIAnimation />
    }
    
    return animationMap[type] || null
  }

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card p-6 h-full hover-lift"
    >
      <div className="relative h-full">
        {/* Background gradient */}
        <div 
          className={`absolute top-0 left-0 w-full h-full rounded-lg transition-opacity duration-300 bg-gradient-to-br ${skill.bgColor} opacity-0 ${hovered ? 'opacity-10' : ''}`}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-4 flex justify-between items-start">
            <h3 className={`text-xl font-bold ${skill.iconColor} ${skill.darkIconColor}`}>
              {skill.title}
            </h3>
          </div>
          
          {/* Animation container */}
          <div 
            className={`w-full h-32 mb-4 flex items-center justify-center overflow-hidden transition-all duration-500 ${hovered ? 'opacity-100 scale-105' : 'opacity-70 scale-100'}`}
          >
            {getAnimation(skill.animationType)}
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
            {skill.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {skill.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className={`px-3 py-1 text-xs font-medium rounded-full
                  ${hovered 
                    ? `bg-gradient-to-r ${skill.bgColor} text-white` 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SkillCard