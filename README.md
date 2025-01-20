# Profile Manager

A React-based application to manage and view user profiles. The project includes a dedicated page for each profile and allows the admin to add, edit, and delete profiles using mock data.

---

## Features

- **Home Page**: Displays a list of user profiles.
- **Dedicated Profile Page**:
  - Clicking on a profile redirects to a detailed page with the profile's full information.
- **Admin Panel**:
  - Add new profiles with details like name, description, city, latitude, longitude, and an image.
  - Edit existing profiles.
  - Delete profiles from the list.
- **Mock Data**: Uses a JSON file (`profiles.json`) as mock data for simplicity.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

# there is no Map and search intigration yet.

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   git clone https://github.com/AkashShinde-10/ProfileMapper.git
   cd profile-manager

2.  **Install dependencies**
    npm install

3. **Run development server**
   npm start


## Technologies Used
Frontend: React, JavaScript, HTML, CSS
Data Source: Mock data (profiles.json)
Package Manager: npm

## How to Customize

**Update Mock Data**:
Add or modify the profiles.json file in the public/ directory.

**Change Styles**:
Modify the App.css file for global styles or individual component styles.

**Extend Functionality**:
Add additional fields or features by modifying the AdminPanel and ProfileDetails components.

    

