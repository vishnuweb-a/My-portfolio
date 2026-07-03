# development.md

# Vishnu Bhardwaj Portfolio 3.0

## Development Blueprint

---

# Objective

Develop a production-grade portfolio application that reflects enterprise-level software engineering practices.

This project is not a landing page.

It is a complete software product showcasing backend engineering, AI projects, technical blogs, freelancing services, and personal branding.

The final application must be modular, maintainable, scalable, performant, accessible, SEO-friendly, and easy to extend.

---

# Technology Stack

## Frontend

* React 19
* TypeScript
* Vite
* Tailwind CSS
* Motion
* React Router
* shadcn/ui
* Lucide React
* React Hook Form
* Zod
* React Query (TanStack Query)

---

## Styling

* Tailwind CSS
* CSS Variables
* Utility-first architecture
* Mobile-first responsive design

Never use inline styles.

Never hardcode colors.

Use design tokens.

---

## Build Tool

Vite

Production optimized

Code splitting enabled

Tree shaking enabled

---

# Project Architecture

Follow a feature-based architecture.

Never place all components inside one folder.

Every feature should be isolated.

Use reusable UI components.

Business logic must remain separate from presentation.

---

# Folder Structure

```text
src/
│
├── app/
│
├── assets/
│
├── components/
│   ├── ui/
│   ├── common/
│   ├── layout/
│   ├── navigation/
│   ├── cards/
│   ├── buttons/
│   ├── forms/
│   ├── animations/
│
├── features/
│   ├── hero/
│   ├── about/
│   ├── timeline/
│   ├── skills/
│   ├── projects/
│   ├── blog/
│   ├── learning/
│   ├── freelance/
│   ├── contact/
│   ├── games/
│   ├── footer/
│
├── hooks/
│
├── services/
│
├── lib/
│
├── utils/
│
├── types/
│
├── constants/
│
├── context/
│
├── config/
│
├── data/
│
├── pages/
│
├── layouts/
│
└── styles/
```

---

# Component Rules

Every component should have

Component.tsx

Component.types.ts

Component.styles.ts (only if necessary)

index.ts

Each component should have

Single responsibility

Reusable props

Strong typing

No duplicated code

---

# Routing

React Router

Separate routes for

Home

Projects

Project Details

Blog

Learning

Freelancing

Resume

Contact

404

Future expansion ready

---

# State Management

Prefer local state.

Use Context API only where necessary.

Use React Query for asynchronous data.

Avoid unnecessary global state.

---

# Forms

Use

React Hook Form

*

Zod validation

Client-side validation

Accessible labels

Proper error messages

Loading states

Success states

---

# Animations

Use Motion.

Animations should be

Fast

Subtle

Purposeful

Allowed

Fade

Slide

Reveal

Scale

Hover

Counter

Accordion

Tabs

Avoid excessive animation.

---

# Images

Lazy load images.

Use responsive sizing.

Compress all assets.

Use WebP when possible.

---

# SEO

Every page must include

Title

Description

Open Graph

Twitter Cards

Canonical URL

Structured Data

Robots

Sitemap

---

# Accessibility

Semantic HTML

ARIA labels

Keyboard navigation

Visible focus

Screen reader support

Contrast ratio compliant

---

# Performance Targets

First Contentful Paint < 1.5s

Largest Contentful Paint < 2.5s

CLS < 0.1

Performance > 95

Accessibility > 95

SEO > 95

Best Practices > 95

---

# Theme System

Implement using CSS variables.

Support

Light

Dark

System

Theme should persist using Local Storage.

---

# Data Strategy

Use JSON files for

Projects

Skills

Timeline

Learning

Experience

Services

Testimonials

Blogs

Future backend integration should require minimal changes.

---

# Projects Data Model

Each project should include

Title

Slug

Description

Category

Status

Images

Tech Stack

Features

Architecture

Challenges

Learnings

GitHub URL

Live URL

Documentation URL

Timeline

Tags

---

# Skills Data Model

Category

Name

Description

Logo

Projects

Official Documentation

Learning Status

---

# Blog Data Model

Title

Slug

Date

Tags

Read Time

Thumbnail

Markdown Content

Author

---

# Code Standards

Use TypeScript strictly.

No use of any.

No console.log in production.

Use ESLint.

Use Prettier.

Meaningful variable names.

Meaningful component names.

Prefer composition over inheritance.

No duplicated logic.

---

# Naming Convention

Components

PascalCase

Hooks

useSomething

Files

kebab-case where appropriate

Constants

UPPER_CASE

Interfaces

PascalCase

Types

PascalCase

---

# Error Handling

Graceful UI

Fallback components

Error boundaries

404 page

Empty states

Retry mechanism

Loading states

---

# Loading Experience

Skeleton loaders

Lazy loading

Progress indicators

Suspense boundaries

---

# Interactive Features

Command Palette

Search

Scroll Progress

Back to Top

Copy Email

Copy Discord

Theme Switcher

Project Filters

Skill Filters

Search Bar

Animated Timeline

Visitor Counter

GitHub Activity

Reading Progress

---

# Blog Engine

Markdown support

Syntax highlighting

Table of contents

Share button

Related articles

Search

Categories

Tags

---

# Games Module

Separate feature module.

Each game isolated.

Reusable game engine.

Games

Memory Match

Guess Output

Debug Challenge

HTTP Quiz

Git Quiz

Backend Puzzle

SQL Challenge

DSA Quiz

Achievements

Leaderboard

---

# Contact Module

Validation

Email integration

Toast notifications

Success animation

Spam protection

Future backend ready

---

# Freelancing Module

Services

Pricing

Portfolio

Testimonials

Booking CTA

Project inquiry form

Frequently Asked Questions

---

# GitHub Integration

GitHub Profile

Pinned repositories

Contribution graph

Latest commits

Languages

Repository statistics

Automatically fetched using GitHub API.

---

# Deployment

Frontend

Vercel

Future Backend

Render

Domain

Custom Domain

HTTPS enabled

Compression enabled

Caching enabled

---

# Testing

Unit Tests

Component Tests

Accessibility Tests

Responsive Tests

Cross-browser testing

Performance testing

---

# Security

Environment variables

No secrets in frontend

Sanitize user inputs

Prevent XSS

Content Security Policy

Secure headers

---

# Version Control

Git Flow

Feature branches

Pull Requests

Meaningful commits

Semantic versioning

---

# Documentation

Maintain

README.md

requirements.md

design.md

development.md

components.md

api.md (future)

deployment.md

changelog.md

---

# AI Agent Instructions

The AI agent must behave as a senior frontend engineer.

Do not generate placeholder-quality code.

Do not create monolithic files.

Do not use unnecessary dependencies.

Do not ignore TypeScript errors.

Do not use `any`.

Do not duplicate components.

Prefer reusable abstractions.

Keep business logic separate from UI.

Follow SOLID principles where applicable.

Ensure every component is modular, testable, and maintainable.

Write production-ready code from the first implementation.

Continuously validate that the implementation matches `requirements.md` and `design.md`.

When uncertain, prioritize maintainability, accessibility, performance, and code quality over speed of implementation.

The final deliverable should feel like software developed by an experienced engineering team rather than an AI-generated prototype.
