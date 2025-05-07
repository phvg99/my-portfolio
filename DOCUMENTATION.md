# Portfolio Website Documentation

## Project Overview
This is a personal portfolio/resume website for Dillion Verma, a software engineer turned entrepreneur. The site showcases professional experience, projects, and skills.

### Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Custom "Magic UI" components for transitions and effects

## Project Structure

### Main Layout (`src/app/layout.tsx`)
- Defines the root HTML structure
- Sets up theme provider for light/dark mode
- Configures metadata for SEO
- Implements global styles and fonts (Inter)
- Sets max width of `2xl` (42rem/672px) with appropriate padding
- Includes the Navbar component at the bottom

### Homepage (`src/app/page.tsx`)
Structured in vertical sections:
1. **Hero** - Introduction with avatar and brief headline
2. **About** - Text summary with markdown support
3. **Work Experience** - Professional history displayed as cards
4. **Education** - Academic background in card format
5. **Skills** - Technical skills displayed as badge components
6. **Projects** - Featured work in card format with links
7. **Hackathons** - Past hackathon participations in timeline format
8. **Contact** - Contact information and social links

### Data Structure (`src/data/resume.tsx`)
Central data object that contains:
- Personal information (name, description, avatar URL)
- Work history with dates, descriptions, and company details
- Education history
- Technical skills list
- Project information with technologies and links
- Hackathon participation history
- Contact information and social media links

### UI Components
Several custom components including:
- `ResumeCard` - For displaying work and education items
- `ProjectCard` - For showcasing projects
- `HackathonCard` - For hackathon entries
- `BlurFade` and `BlurFadeText` - Animation components for staggered reveal effects
- Standard Shadcn UI components (Avatar, Badge, etc.)

### Tailwind Configuration (`tailwind.config.ts`)
- Custom color palette using HSL variables through the `hsl(var(--color))` pattern
- Container configurations for responsive design
- Custom animations keyframes (accordion, etc.)
- Integration with plugins:
  - `tailwindcss-animate` - For animation utilities
  - `@tailwindcss/typography` - For markdown styling

## Animation Strategy
- Staggered reveal animations using custom Magic UI components
- Sequential loading with increasing delays using `BLUR_FADE_DELAY` multiplier
- Clean transitions between sections

## Responsive Design
- Mobile-first approach with Tailwind's responsive classes
- Adjusts layout and text sizes for different viewport sizes
- Uses flexbox and grid for component layouts

## Theme Support
- Light and dark mode via ThemeProvider
- Custom color variables that respect the current theme

## Performance Considerations
- Next.js app router for efficient routing and rendering
- Component-based structure for code reuse
- Centralized data management for ease of updates

## Future Expansion
Areas that could be expanded:
- Blog section (path already exists in navbar)
- Additional project details or case studies
- Interactive portfolio elements 