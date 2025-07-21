# Uptick Week 3

## working on put/patch request

## CRUD Backend Application with Express, Sequelize, and PostgreSQL

This backend application provides a RESTful API for managing users and their notes. Built with Express.js, it leverages Sequelize ORM to interact with a PostgreSQL database. Users can register, authenticate, and create, read, update, and delete their personal notes.

---

## Features

### User Management

- Register with an email and name
- Each user has a unique identifier (UUID)
- Unique email enforcement (no duplicates)
- Secure, user-specific access to notes

### Note Management

- Create, update, and delete notes
- Each note has a title and content
- Notes are associated with a user (foreign key)
- Notes include timestamps for creation and last modification

---

## Database Schema

### User Table

- `id` (UUID, Primary Key): Unique identifier for each user
- `name` (String): The user's name
- `email` (String, Unique): The user's email (used for authentication)
- `created_at` (Date): Timestamp of when the user was created
- `updated_at` (Date): Timestamp of the last time the user's details were updated

### Note Table

- `id` (UUID, Primary Key): Unique identifier for each note
- `title` (String): Title of the note
- `content` (Text): Content or body of the note
- `user_id` (UUID, Foreign Key): References the user who created the note
- `created_at` (Date): Timestamp of when the note was created
- `updated_at` (Date): Timestamp of the last time the note was modified

---

## Technologies Used

- **Express.js**: Server-side framework for handling API requests
- **Sequelize ORM**: SQL ORM for managing database models and migrations
- **PostgreSQL**: Relational database used to store user and note data

---

This backend API ensures seamless note-taking with a user-friendly design and efficient database management. It is ideal for personal use or further integration into larger applications.
