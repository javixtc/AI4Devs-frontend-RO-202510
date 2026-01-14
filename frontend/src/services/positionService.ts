import { CandidateData, PositionData } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

export const fetchInterviewFlow = async (positionId: string): Promise<PositionData> => {
  try {
    const response = await fetch(`${API_BASE_URL}/positions/${positionId}/interviewFlow`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch interview flow: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching interview flow:', error);
    throw error;
  }
};

export const fetchCandidates = async (positionId: string): Promise<CandidateData[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/positions/${positionId}/candidates`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch candidates: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching candidates:', error);
    throw error;
  }
};

export const updateCandidateStage = async (candidateId: number, newStepId: number): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/candidates/${candidateId}/stage`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currentInterviewStepId: newStepId
      })
    });
    
    if (!response.ok) {
      throw new Error(`Failed to update candidate stage: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating candidate stage:', error);
    throw error;
  }
};
