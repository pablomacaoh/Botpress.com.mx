
import React from "react";

interface LearningPointsProps {
  points: string[];
}

export const WebinarLearningPoints: React.FC<LearningPointsProps> = ({ points }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-3 text-white">Lo que Aprenderás:</h3>
      <ul className="space-y-2">
        {points.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
