# Change: Create Position Kanban Interface

## Why
The current recruitment system lacks a visual interface for managing candidates through the interview process. A kanban-style board will provide an intuitive way for recruiters to visualize candidate progress through different interview stages and update their status through drag-and-drop functionality.

## What Changes
- Create a new position interface with kanban board layout
- Implement candidate cards displaying name and score
- Add drag-and-drop functionality to move candidates between interview stages
- Ensure mobile-responsive design
- Integrate with existing backend endpoints for data fetching and updates

## Impact
- Affected specs: position-management, candidate-management
- Affected code: frontend components, API service integration
- New UI component: PositionKanbanView
