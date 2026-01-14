import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { CandidateData } from '../../types';

interface CandidateCardProps {
  candidate: CandidateData;
  stepName: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, stepName }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: `candidate-${candidate.id}` });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="candidate-card"
    >
      <div className="candidate-info">
        <h4>{candidate.fullName}</h4>
        <div className="candidate-score">
          <span className="score-value">{candidate.averageScore}</span>
          <span className="score-label">/5</span>
        </div>
      </div>
      <div className="candidate-step">
        <span className="step-name">{stepName}</span>
      </div>
    </div>
  );
};

export default CandidateCard;
