## ADDED Requirements

### Requirement: Position Kanban Interface
The system SHALL provide a visual interface for managing candidates in a position's interview process using a kanban board layout.

#### Scenario: Position page loads successfully
- **WHEN** a user navigates to a position page
- **THEN** the interface displays the position title with back navigation
- **AND** interview stages are shown as columns
- **AND** candidate cards are positioned in their respective columns

#### Scenario: Candidate card displays correctly
- **WHEN** a candidate card is rendered
- **THEN** it displays the candidate's full name
- **AND** it displays the candidate's average score
- **AND** it shows the interview stage it belongs to

#### Scenario: Drag-and-drop functionality works
- **WHEN** a user drags a candidate card to a different column
- **THEN** the candidate's interview stage is updated in the backend
- **AND** the card moves to the correct column
- **AND** a success message is displayed

#### Scenario: Mobile responsiveness
- **WHEN** the interface is viewed on a mobile device
- **THEN** interview columns are displayed vertically
- **AND** cards maintain proper sizing and readability
- **AND** drag-and-drop functionality remains accessible

### Requirement: Backend Integration
The system SHALL integrate with existing API endpoints to fetch position data and update candidate stages.

#### Scenario: Fetch interview flow data
- **WHEN** the position page loads
- **THEN** it calls GET /positions/:id/interviewFlow
- **AND** it displays the interview steps as columns

#### Scenario: Fetch candidate data
- **WHEN** the position page loads
- **THEN** it calls GET /positions/:id/candidates
- **AND** it displays candidates in their respective columns

#### Scenario: Update candidate stage
- **WHEN** a candidate card is moved to a new column
- **THEN** it calls PUT /candidates/:id/stage
- **AND** it updates the candidate's current interview step

### Requirement: User Experience
The system SHALL provide an intuitive and responsive user experience.

#### Scenario: Back navigation works
- **WHEN** a user clicks the back arrow
- **THEN** they are redirected to the position list page
- **AND** the navigation is smooth and responsive

#### Scenario: Error handling
- **WHEN** an API call fails
- **THEN** an appropriate error message is displayed
- **AND** the user can retry the operation
