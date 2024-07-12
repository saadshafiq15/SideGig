# SideGigs

## Overview

This project is an Android/iOS application that connects homeowners with handymen and contractors. Homeowners can post renovation or other home improvement jobs they need done, and contractors can bid on these jobs. The job is awarded to the contractor with the lowest bid.

## Features

- **Job Posting:** Homeowners can create posts describing the work they need done, including images, descriptions, and deadlines.
- **Bidding System:** Contractors can browse available jobs and place bids. The lowest bid at the end of the bidding period wins the job.
- **User Profiles:** Both homeowners and contractors have profiles where they can manage their posts and bids, view history, and update personal information.
- **Notifications:** Real-time notifications to keep users updated on the status of their posts and bids.
- **Rating System:** After the job is completed, homeowners can rate and review the contractors.

## Technologies Used

- **Front End:** React Native
- **Design:** Figma
- **Back End:** Firebase

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/home-renovation-bidding-app.git
    cd home-renovation-bidding-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Firebase:**
    - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Add a new app to your project for both Android and iOS.
    - Replace the Firebase configuration in `src/firebase/config.js` with your own Firebase configuration details.

4. **Run the app:**

    ```bash
    npm run start
    ```

    - For Android:
    
        ```bash
        npm run android
        ```
    
    - For iOS:
    
        ```bash
        npm run ios
        ```

## Usage

1. **Sign Up / Login:**
   - New users can sign up using their email and password.
   - Existing users can log in to access their profile and features.

2. **Post a Job:**
   - Navigate to the "Post a Job" section.
   - Fill out the required details including job description, deadline, and upload any relevant images.

3. **Place a Bid:**
   - Contractors can browse available jobs in the "Available Jobs" section.
   - Select a job and place a bid by entering the bid amount and any additional notes.

4. **Manage Posts/Bids:**
   - Homeowners can view and manage their posted jobs in the "My Posts" section.
   - Contractors can view and manage their bids in the "My Bids" section.

5. **Notifications:**
   - Stay updated with real-time notifications on bid status and job updates.

6. **Rate & Review:**
   - After job completion, homeowners can rate and review the contractor’s work.

## Contributing

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/new-feature`)
3. **Commit your changes** (`git commit -am 'Add new feature'`)
4. **Push to the branch** (`git push origin feature/new-feature`)
5. **Create a new Pull Request**

## Figma/Screenshots Below

![image](https://github.com/user-attachments/assets/56984ff6-4369-4444-8816-4765c3732e9f) ![image](https://github.com/user-attachments/assets/2c698b25-7ea0-47d5-8c8b-1238400cceb7) ![image](https://github.com/user-attachments/assets/3513c48a-d7e4-4e75-b574-3faced2efdd0) ![image](https://github.com/user-attachments/assets/0a62da36-9784-42f5-8e1d-cfc061d81cdf) ![image](https://github.com/user-attachments/assets/11eb2715-0e4e-4098-88e0-84b5a3f78b1f)


 

