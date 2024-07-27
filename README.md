# ProgrammersTech Website

Welcome to the ProgrammersTech Website repository! This project showcases a dynamic website for a student organization offering free internships, providing information about the organization, its internship programs, and contact details.

## Features

- **Home Page:** Welcomes visitors with an introduction to the organization.
- **About Page:** Provides detailed information about ProgrammersTech and its mission.
- **Menu Page:** Lists various fields and specific mentorship details available for internships.
- **Gallery Page:** Displays a collection of student works with images and titles.
- **Login and Signup:** User authentication system allowing users to create accounts and log in.
- **Contact Page:** A form to reach out to the organization, with data stored in a MySQL database.
- **Testimonials:** Success stories from students who have benefited from the internships.
- **FAQs:** Answers to common questions about the organization and its programs.
- **JavaScript Validation:** Ensures user input is valid and meets required formats.

## Technologies Used

- **HTML:** For structuring the website content.
- **CSS:** For styling and layout design.
- **JavaScript:** For interactivity and form validation.
- **PHP:** For server-side scripting and logic implementation.
- **MySQL:** For database management with phpMyAdmin interface.

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/programmers-tech.git
   cd programmers-tech
   ```

2. **Setup Web Server:**
   - Ensure you have a local web server installed, such as [XAMPP](https://www.apachefriends.org/index.html) or [WAMP](https://www.wampserver.com/en/).
   - Move the project folder to the web server's directory (e.g., `htdocs` for XAMPP).

3. **Start the Web Server:**
   - Launch Apache and MySQL services through your web server control panel.

4. **Open the Project:**
   - Visit `http://localhost/programmers-tech` in your browser to view the website.

## Database Configuration

1. **Access phpMyAdmin:**
   - Go to `http://localhost/phpmyadmin` and log in with your credentials.

2. **Create a Database:**
   - Create a new database named `programmerstech`.

3. **Import the Database Schema:**
   - Navigate to the "Import" tab and select the provided `database.sql` file to set up the necessary tables.

4. **User Table Structure:**
   ```sql
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       email VARCHAR(255) NOT NULL,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. **Contact Table Structure:**
   ```sql
   CREATE TABLE contacts (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       message TEXT NOT NULL,
       submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

## Usage

- **Login and Signup:**
  - Users can create accounts and log in to access personalized features.
  
- **Contact Form:**
  - The contact form submissions are stored directly in the MySQL database for easy management and retrieval.

- **Dynamic Sections:**
  - The website dynamically displays content based on user interaction and database entries.
