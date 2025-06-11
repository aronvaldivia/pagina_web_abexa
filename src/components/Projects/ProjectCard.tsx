import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

const ProjectCard = ({ image, title, description, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;