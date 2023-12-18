# CVComposer-backend

![banner](img/cvcomposerheadimg.png)

![GitHub repo size](https://img.shields.io/github/repo-size/MelakuDemeke/CVComposer-backend)
![GitHub issues](https://img.shields.io/github/issues/MelakuDemeke/CVComposer-backend)
![GitHub Repo stars](https://img.shields.io/github/stars/MelakuDemeke/CVComposer-backend?logo=github&style=flat)
![GitHub forks](https://img.shields.io/github/forks/MelakuDemeke/CVComposer-backend?logo=github&style=falt)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/MelakuDemeke/CVComposer-backend?logo=github)

## Overview
CVComposer-backend is the backend of the CVComposer project. CVComposer is a web-based platform tailored to assist job seekers in crafting compelling CVs (Curriculum Vitae) and Cover Letters effortlessly. In the backend we also add a method of posting and and getting job postes from the database. The backend is built using Node.js, Express.js, and MongoDB.

<p align="left"> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="bootstrap" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="bootstrap" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="bootstrap" width="40" height="40"/>
</p>

- [CVComposer-backend](#cvcomposer-backend)
  - [Overview](#overview)
  - [Features](#features)
    - [user authentication](#user-authentication)
      - [Register User](#register-user)
      - [Login](#login)
      - [Check Authentication](#check-authentication)
    - [User Management](#user-management)
      - [Update User](#update-user)
    - [Job Management](#job-management)
      - [Create Job](#create-job)
      - [Update Job](#update-job)
      - [Get Job](#get-job)
      - [Get All Jobs](#get-all-jobs)
      - [Get Job by Category](#get-job-by-category)
    - [Tips](#tips)
      - [Get All Tips](#get-all-tips)
      - [Get Tip by ID](#get-tip-by-id)
      - [Get Tips by Category](#get-tips-by-category)
      - [Create Tip](#create-tip)
  - [contributors](#contributors)

## Features

### user authentication

#### Register User
* Endpoint: `http://localhost:8800/api/v1/auth/register`
  * Method: `POST`
  * Description: Register a new user.
  * Body: JSON containing username, email, and password.

#### Login
* Endpoint: `http://localhost:8800/api/v1/auth/login`
  * Method: `POST`
  * Description: Log in a user.
  * Body: JSON containing username and password.

#### Check Authentication
* Endpoint: `http://localhost:8800/api/v1/users/checkadmin/{userId}`
  * Method:`GET`
  * Description: Check if a user is an admin.
  * Params: userId (replace with actual user ID).

### User Management

#### Update User
* Endpoint: `http://localhost:8800/api/v1/users/{userId}`
  * Method: `PUT`
  * Description: Update user details, specifically set isAdmin to false.
  * Body: JSON containing isAdmin field.

### Job Management

#### Create Job
* Endpoint: `http://localhost:8800/api/v1/jobs`
  * Method: `POST`
  * Description: Create a new job posting.
  * Body: JSON with job details such as title, company, location, etc.

#### Update Job
* Endpoint: `http://localhost:8800/api/v1/jobs/{JobId}`
  * Method: `PUT`
  * Description: Update an existing job posting.
  * Body: JSON with updated job details.

#### Get Job
* Endpoint: `http://localhost:8800/api/v1/jobs/{JobId}`
  * Method: `GET`
  * Description: Get details of a specific job.

#### Get All Jobs
* Endpoint: `http://localhost:8800/api/v1/jobs?page=1&resultsPerPage=10`
  * Method: `GET`
  * Description: Get a list of all jobs.
  * Features: implement pagination

#### Get Job by Category
* Endpoint: `GET /api/v1/tips/bytitle/?title={title}`
  * Description: Retrieve tips based on a specific category.
  * Headers: User-Agent: insomnia/8.4.5

### Tips

#### Get All Tips
* Endpoint: `GET /api/v1/tips?page=1&resultsPerPage=10`
  * Description: Retrieve all tips.
  * Headers: User-Agent: insomnia/8.4.5
  * Features: also implement pagination

#### Get Tip by ID
* Endpoint : `GET /api/v1/tips/find/{tipId}`
  * Description: Retrieve a specific tip by ID.
  * Headers: User-Agent: insomnia/8.4.5

#### Get Tips by Category
* Endpoint: `GET /api/v1/tips/bycategory/?category={category}`
  * Description: Retrieve tips based on a specific category.
  * Headers: User-Agent: insomnia/8.4.5

#### Create Tip
* Endpoint**: `POST /api/v1/tips`
  * Description: Create a new tip.
  * Headers: Content-Type: application/json, User-Agent: insomnia/8.4.5
  * Body:
  ```json
  {
      "title": "CV Writing Tips",
      "category": "CV",
      "content": "Highlight your key achievements, use action verbs, and keep your CV concise and well-organized. Tailor it for the specific job you're applying for."
  }

## Installation

To run the CVComposer-backend locally for development or testing purposes, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/MelakuDemeke/CVComposer-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CVComposer-backend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```



## contributors
<a href="https://github.com/MelakuDemeke/CVComposer/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MelakuDemeke/CVComposer" />
</a>
