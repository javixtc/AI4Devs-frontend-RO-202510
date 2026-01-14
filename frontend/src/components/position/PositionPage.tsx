import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { fetchInterviewFlow, fetchCandidates, updateCandidateStage } from '../../services/positionService';
import { PositionData, CandidateData } from '../../types';
import Column from './Column';
import './PositionPage.css';

const PositionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [positionData, setPositionData] = useState<PositionData | null>(null);
  const [candidates, setCandidates] = useState<CandidateData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const [interviewFlow, fetchedCandidates] = await Promise.all([
          fetchInterviewFlow(id),
          fetchCandidates(id)
        ]);
        
        setPositionData(interviewFlow);
        setCandidates(fetchedCandidates);
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load position data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over || !positionData) return;

    // Find the candidate and step
    const candidateId = parseInt(active.id.toString().replace('candidate-', ''));
    const newStepName = over.id.toString();
    
    // Find the step ID from the step name
    const newStep = positionData.interviewFlow.interviewSteps.find(step => step.name === newStepName);
    
    if (!newStep) return;

    // Find the candidate data
    const candidate = candidates.find(c => c.id === candidateId);
    
    if (!candidate) return;

    // Update candidate stage
    const updateCandidate = async () => {
      try {
        await updateCandidateStage(candidateId, newStep.id);
        
        // Update local state
        setCandidates(prevCandidates => 
          prevCandidates.map(c => 
            c.id === candidateId 
              ? { ...c, currentInterviewStep: newStepName } 
              : c
          )
        );
      } catch (err) {
        console.error('Error updating candidate stage:', err);
        // Optionally show error to user
      }
    };

    updateCandidate();
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!positionData) {
    return <div className="error">Position not found</div>;
  }

  // Group candidates by interview step
  const candidatesByStep: { [key: string]: CandidateData[] } = {};
  
  candidates.forEach(candidate => {
    if (!candidatesByStep[candidate.currentInterviewStep]) {
      candidatesByStep[candidate.currentInterviewStep] = [];
    }
    candidatesByStep[candidate.currentInterviewStep].push(candidate);
  });

  // Render columns in order
  const orderedSteps = [...positionData.interviewFlow.interviewSteps]
    .sort((a, b) => a.orderIndex - b.orderIndex);

  return (
    <div className="position-page">
      <div className="position-header">
        <button 
          className="back-button"
          onClick={() => navigate('/positions')}
        >
          ←
        </button>
        <h1 className="position-title">{positionData.name}</h1>
      </div>
      
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={orderedSteps.map((step) => step.name)} 
          strategy={verticalListSortingStrategy}
        >
          <div className="kanban-board">
            {orderedSteps.map((step, index) => (
              <Column 
                key={step.id} 
                step={step} 
                candidates={candidatesByStep[step.name] || []} 
                isLast={index === orderedSteps.length - 1}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default PositionPage;
