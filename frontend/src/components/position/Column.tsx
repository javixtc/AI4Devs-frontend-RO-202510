import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { CandidateData } from '../../types';
import CandidateCard from './CandidateCard';

interface ColumnProps {
  step: {
    id: number;
    name: string;
  };
  candidates: CandidateData[];
  isLast: boolean;
}

const Column: React.FC<ColumnProps> = ({ step, candidates, isLast }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: step.name });

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
      className="kanban-column"
    >
      <div className="column-header">
        <h3>{step.name}</h3>
        <span className="candidate-count">{candidates.length}</span>
      </div>
      <div className="column-cards">
        {candidates.map((candidate) => (
          <CandidateCard 
            key={candidate.id} 
            candidate={candidate} 
            stepName={step.name}
          />
        ))}
        {candidates.length === 0 && (
          <div className="empty-column">
            <p>No candidates</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Column;
