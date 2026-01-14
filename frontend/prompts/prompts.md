Openspec y cline con ollama+qwen3coder

/openspec-proposal Create an OpenSpec specification for a frontend feature called "Position Kanban Page" within an Applicant Tracking System (ATS).

The purpose of this specification is to define, in a precise and unambiguous way,
the functional, data, UI, and integration requirements for a Kanban-style page that
allows recruiters to visualize and manage candidates for a specific job position.

────────────────────────────────────────
1️⃣ DOMAIN CONTEXT
────────────────────────────────────────

Domain: Recruitment / HR Tech / Applicant Tracking System

The feature belongs to a web-based ATS where recruiters manage hiring pipelines.
The Position page represents the hiring workflow for a single job position.

Key constraints:

- Visual clarity is critical
- State consistency must be guaranteed
- Backend is the source of truth
- User actions must be safely persisted

────────────────────────────────────────
2️⃣ FEATURE SCOPE
────────────────────────────────────────

Feature name: Position Kanban Page

The page allows users to:

- View the title of a job position
- See the interview process as ordered phases
- Visualize candidates as cards inside those phases
- Move candidates between phases using drag & drop
- Persist phase changes via a backend API

Out of scope:

- Authentication
- Global layout (header, footer, navigation)
- Candidate detail pages

────────────────────────────────────────
3️⃣ DATA CONTRACTS
────────────────────────────────────────

InterviewStep:

- id: number (required, unique)
- name: string (required)
- orderIndex: number (required, determines column order)

Candidate:

- fullName: string (required)
- currentInterviewStep: string (required, must match [InterviewStep.name](http://interviewstep.name/))
- averageScore: number (required, range 0–5)

────────────────────────────────────────
4️⃣ BACKEND API CONTRACTS
────────────────────────────────────────

GET /positions/:id/interviewFlow
Purpose: Fetch interview process definition for a position.

Response schema:

- positionName: string
- interviewFlow:
    - id: number
    - description: string
    - interviewSteps: InterviewStep[]

Example response:
{
"positionName": "Senior backend engineer",
"interviewFlow": {
"id": 1,
"description": "Standard development interview process",
"interviewSteps": [
{ "id": 1, "name": "Initial Screening", "orderIndex": 1 },
{ "id": 2, "name": "Technical Interview", "orderIndex": 2 },
{ "id": 3, "name": "Manager Interview", "orderIndex": 3 }
]
}
}

GET /positions/:id/candidates
Purpose: Fetch candidates currently in the hiring process.

Response schema:
Candidate[]

Example response:
[
{
"fullName": "Jane Smith",
"currentInterviewStep": "Technical Interview",
"averageScore": 4
}
]

PUT /candidates/:id/stage
Purpose: Update the interview stage of a candidate after movement.

Request body:

- applicationId: string
- currentInterviewStep: string ([InterviewStep.id](http://interviewstep.id/) as string)

Success response:

- updated candidate application data

────────────────────────────────────────
5️⃣ FUNCTIONAL RULES
────────────────────────────────────────

- Interview steps MUST be rendered ordered by orderIndex ascending
- Each candidate MUST appear in exactly one column
- A candidate’s column is determined by matching:
Candidate.currentInterviewStep === [InterviewStep.name](http://interviewstep.name/)
- Drag & drop between columns triggers a stage update
- UI MUST apply optimistic updates
- On API failure, UI MUST revert to previous state

────────────────────────────────────────
6️⃣ UI / UX REQUIREMENTS
────────────────────────────────────────

- The position title MUST be displayed at the top
- A back navigation arrow MUST appear to the left of the title
- Each interview step MUST render as one Kanban column
- Each candidate MUST render as a draggable card showing:
    - Full name
    - Average score
- Responsive behavior:
    - Desktop: columns horizontally
    - Mobile: columns stacked vertically, full width

────────────────────────────────────────
7️⃣ TECHNICAL CONSTRAINTS
────────────────────────────────────────

- Frontend framework: React 18+
- Language: TypeScript
- State management: React hooks only
- Drag & drop: @dnd-kit or react-beautiful-dnd
- Styling: CSS Modules or Styled Components
- No inline styles
- No hardcoded business data
- Components must be reusable and decoupled

────────────────────────────────────────
8️⃣ NON-FUNCTIONAL REQUIREMENTS
────────────────────────────────────────

- Explicit loading and error states are required
- Backend data must be validated defensively
- IDs must be verified before mutation calls
- The specification must be implementation-agnostic
but precise enough to generate consistent code

────────────────────────────────────────
9️⃣ OUTPUT EXPECTATION
────────────────────────────────────────

Produce an OpenSpec-compliant proposal that:

- Clearly defines the feature contract
- Eliminates ambiguity
- Can be used as a single source of truth
for implementation by autonomous coding agents

/openspec-apply

He intentado probarlo pero no funciona. No sé cómo acceder al componente creado.
Tras varias interacciones indicándole que lo arregle lo he dejado. Ya he perdido bastante tiempo.