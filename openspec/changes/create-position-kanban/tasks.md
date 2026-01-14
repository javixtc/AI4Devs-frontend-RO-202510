## Implementation Tasks

### Position Kanban Page

- [ ] Create PositionPage (internal page content only)
- [ ] Fetch interview flow from GET /positions/:id/interviewFlow
- [ ] Fetch candidates from GET /positions/:id/candidates
- [ ] Store interview steps ordered by orderIndex
- [ ] Render position title with back navigation arrow
- [ ] Render one Kanban column per interview step
- [ ] Render candidate cards inside matching column
      (Candidate.currentInterviewStep === InterviewStep.name)
- [ ] Implement drag & drop between columns
- [ ] Apply optimistic UI update when candidate is moved
- [ ] Persist stage change via PUT /candidates/:id/stage
- [ ] Revert candidate position on API error
- [ ] Handle loading and error states explicitly
- [ ] Implement responsive layout:
      - Desktop: horizontal columns
      - Mobile: vertical full-width columns
