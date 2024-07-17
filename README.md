DeKUT Hack
Official Hackathon Submission for DeKUT Hack
---

# Reise Guide (Travel Planner Application)

## Overview
The Travel Planner Application is designed to assist users in planning their travel experiences by suggesting destinations based on various preferences. It integrates features for hotel and insurance booking, as well as a chatbot powered by a generative AI model for seamless user interaction.

### Problem Statement
The global travel and tourism market is rapidly growing, projected to reach $8.6 trillion by 2025. Personalized services are increasingly valued by customers, with over 71% expecting tailored interactions. Platforms that simplify the booking process and offer personalized recommendations are crucial for enhancing user satisfaction and engagement.

### Images
![Screenshot (890)](https://github.com/Ruchi-here/CalCodeFest/assets/122676573/db234670-19fc-4e65-a509-fa0996a4ff12)
![Screenshot (891)](https://github.com/Ruchi-here/CalCodeFest/assets/122676573/ae1ffa19-955f-400b-b55d-52c851d79120)
![Screenshot (900)](https://github.com/Ruchi-here/CalCodeFest/assets/122676573/656577f2-1ba1-4916-ab4e-e32202809142)
![Screenshot (892)](https://github.com/Ruchi-here/CalCodeFest/assets/122676573/7d42aae4-c049-48e8-9316-96ab811728bf)
![Screenshot (893)](https://github.com/Ruchi-here/CalCodeFest/assets/122676573/8549a8d8-817f-48cd-85e4-5a2aac0ac0e0)
![Screenshot (894)](https://github.com/Ruchi-here/CalCodeFest/assets/122676573/3da73a8d-70d9-431f-9360-a547b8ba6b5b)


## Features

### 1. Destination Suggestions
- The application suggests destinations based on user preferences such as type of place, duration of visit, and preferred activities.
- User-friendly interfaces streamline the selection process, ensuring an intuitive and stress-free experience.

### 2. Chatbot Integration
- A generative AI model is integrated to handle user queries related to travel plans and destinations.
- It enhances user experience by providing real-time assistance and personalized recommendations.

### 3. Hotel and Insurance Booking
- Users can book hotels directly through the application, choosing from a curated list of options that meet their preferences.
- Integrated insurance comparison allows users to select and purchase travel insurance based on their specific needs, ensuring coverage during their trip.
  
### 4. Recommendation System Overview
- **Data Loading**
  - Dataset: The system starts by loading data from the file 'corpus.csv', containing comprehensive information about various places and their attributes.
- **Data Preprocessing and Transformation**
  - Data Cleaning: Initial steps involve handling missing values and removing unnecessary columns to streamline the dataset for analysis.
  - Scaling Numerical Data: Numerical attributes like budget and maximum duration are scaled to ensure uniformity and optimal model performance.
  - One-Hot Encoding: Categorical variables such as location type and zone are transformed using one-hot encoding, making them suitable for machine learning algorithms.
- **Recommendation Process**
  - User Input: Users input preferences such as location type, zone, budget, and maximum duration for their trip.
  - Preprocessing Pipeline: User-provided preferences undergo the same preprocessing steps as the dataset, ensuring consistency and compatibility.
  - Recommendation Generation: Utilizing preprocessed user preferences, the system employs a recommendation algorithm to suggest places that best match the user's criteria.
- **Key Features**
  - Personalization: Recommendations are tailored to individual user preferences, ensuring relevance and satisfaction.
  - Scalability: The system efficiently handles diverse datasets and user inputs, accommodating various preferences and scenarios.
  - Accuracy: Through effective preprocessing and algorithmic selection, the system aims to provide precise recommendations aligned with user expectations.
- **Future Enhancements**
  - Enhanced Algorithm: Continuous improvement of recommendation algorithms to enhance accuracy and personalization.
  - Feedback Loop: Implementation of a feedback mechanism to refine recommendations based on user interactions and feedback.


## Setup Instructions

### Prerequisites
- Python 3.x
- Flask
- Gemini API Key
- Pandas, NumPy (for data processing)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your/repository.git
   cd repository
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   - Create a `.env` file and include necessary API keys and configuration details.

4. Run the application:
   ```bash
   python app.py
   ```

5. Access the application:
   - Open a web browser and go to `http://localhost:5000` to start using the Travel Planner Application.

## Credits
- Developed by Team - Kuch bhi

## License
- This project is licensed under the [MIT] License - see the LICENSE.md file for details.

---
