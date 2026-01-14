export interface InterviewStep {
  id: number;
  interviewFlowId: number;
  interviewTypeId: number;
  name: string;
  orderIndex: number;
}

export interface Candidate {
  id: number;
  fullName: string;
  currentInterviewStep: string;
  averageScore: number;
}

export interface PositionData {
  name: string;
  interviewFlow: {
    id: number;
    description: string;
    interviewSteps: InterviewStep[];
  };
}

export interface CandidateData {
  id: number;
  fullName: string;
  currentInterviewStep: string;
  averageScore: number;
}
