# Project Context

## Purpose
This is a full-stack talent tracking system (LTI - Talent Tracking System) designed to manage candidate information, job positions, applications, and interview processes. The system provides a comprehensive solution for talent acquisition and management with both frontend and backend components.

## Tech Stack
- **Frontend**: React with TypeScript, Bootstrap, React Router
- **Backend**: Node.js with Express, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Build Tools**: npm, Docker, Docker Compose
- **Testing**: Jest, React Testing Library
- **Code Quality**: ESLint, Prettier

## Project Conventions

### Code Style
- TypeScript with strict typing
- React functional components with hooks
- Component-based architecture with clear separation of concerns
- Consistent naming conventions (camelCase for variables, PascalCase for components)
- Modular structure with clear directory organization
- ESLint and Prettier for code formatting and linting

### Architecture Patterns
- **Domain-Driven Design (DDD)**: Clear separation of domain models, application logic, and infrastructure
- **Clean Architecture**: Separation of concerns with distinct layers:
  - Domain: Business logic and models
  - Application: Application logic and services
  - Infrastructure: Database and external service integrations
  - Presentation: Controllers and API endpoints
- **Repository Pattern**: Abstracted data access through repositories
- **Service Layer**: Business logic encapsulated in services
- **SOLID Principles**: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion

### Testing Strategy
- Unit testing with Jest for backend services
- Integration testing for API endpoints
- Component testing with React Testing Library for frontend
- Test coverage for critical business logic
- End-to-end testing approach for core user flows

### Git Workflow
- Feature branches for development
- Pull requests for code review
- Semantic versioning for releases
- Commit message conventions (e.g., feat:, fix:, docs:, style:, refactor:, test:, chore:)

## Domain Context
The system manages:
- Candidates with personal information, education, work experience, and resumes
- Companies and their positions
- Interview processes with multiple steps and types
- Applications tracking candidates through interview stages
- Interview scheduling and results management

## Important Constraints
- PostgreSQL database with Prisma ORM
- Docker-based development environment
- TypeScript for type safety
- RESTful API design for backend services
- React frontend with modern component architecture
- Environment variables for configuration management

## External Dependencies
- Prisma Client for database operations
- Express.js for backend framework
- React and React Router for frontend navigation
- Bootstrap for UI components
- Multer for file uploads
- Swagger for API documentation
- Jest for testing
- Docker for containerization
