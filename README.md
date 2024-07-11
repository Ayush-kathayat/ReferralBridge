
# Worko.ai Frontend Internship Project

## Project Description
This project demonstrates my frontend development skills by creating a UI for a job seeker product. The product allows job seekers to request referrals from companies and services like resume reviews, interview handholding, career guidance, and mock interviews.

**GitHub Repository:** [Your GitHub Link Here]

## Key Features and Implementation

### 1. Authentication
- **Sign Up and Login:** Implemented using Firebase SDK with two separate pages for sign-up and login. Forms are built and validated using `react-hook-form`.
- **Protected Routes:** Ensured only authenticated users can access certain pages with a utility function.

### 2. Index/Landing Page
- **Search Component:** Filters static data by company name and industry.
- **Go to Home Button:** Navigates to the home page if logged in, otherwise redirects to the login page.
- **Header Component:** Includes Sign Up and Login buttons. If logged in, it displays a greeting with the user’s name and a Logout button.

### 3. Candidate Home
- **Referral List:** Displays referrals requested by the candidate using data from the DummyJSON Products API.
- **Services List:** Shows services requested by the candidate, also using DummyJSON Products API.
- **Search Components:**
  - **Referrals Search:** Filters by Title and Category.
  - **Services Search:** Filters by Service ID and Brand Name.
- **Logout Option:** Allows users to log out, clearing the authentication context.

### 4. Common Component
- **Search Component:** Utilizes control flow statements to differentiate between static data and API data. It accepts props like `apiUrl` to fetch and display data.

### 5. Routes
- **/**: Landing page with a search component and navigation options.
- **/signup:** Sign-up page for new users.
- **/login:** Login page for existing users.
- **/home:** Home page displaying referrals and services, accessible only to authenticated users.

### Additional Features
- **React Router:** For routing between different pages.
- **React Loader Spinner:** For displaying loading indicators during API calls.
- **Context API:** For managing authentication state across the application.
- **Firebase & Firestore:** For authentication and storing user data.
- **DummyJSON Products API:** For fetching dummy data for referrals and services.
- **Custom CSS:** Defined CSS variables in `index.css` for styling and ensuring the application is responsive.

### Events and Interactivity
- **Click Events:** For buttons and other interactive elements.
- **Hover Events:** For enhanced UX on interactive elements.
- **Focus and Blur Events:** For input field validations.

## Technologies Used
- **React:** For building the user interface.
- **React Router:** For managing routes and navigation.
- **React Loader Spinner:** For loading indicators.
- **React Hook Form:** For form handling and validation.
- **Context API:** For managing state, specifically authentication state.
- **Firebase & Firestore:** For authentication and data storage.
- **DummyJSON Products API:** For fetching dummy data for referrals and services.
- **Custom CSS:** For responsive design and styling.

## Installation and Setup
To run this project locally:
1. Clone the repository.
   ```bash
   git clone [Your GitHub Link Here]
   ```
2. Install the dependencies.
   ```bash
   npm install
   ```
3. Run the project.
   ```bash
   npm start
   ```

## Conclusion
This project showcases my ability to build a full-stack application with a focus on frontend development using React. It highlights my skills in using various libraries and tools to create a functional and responsive UI, with proper form validations and authentication mechanisms.
