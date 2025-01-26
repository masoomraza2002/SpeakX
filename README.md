# SpeakX
This project is Quest searchQuest Search is a project designed to enhance the search experience, offering users an intuitive and efficient way to find relevant information quickly and easily


## System Requirements

Before you begin, make sure your system meets the following requirements:

- **VS Code** 
- **Node.js** 
- **MongoDB** (Ensure MongoDB is running locally or you have access to a remote MongoDB database)

Additionally, the project requires the following technologies:

- **React**
- **Express**
- **MongoDB**

---

## Setting Up MongoDB

1. **Create a Database**: Ensure your MongoDB database is named `speakX`.
2. **Create a Collection**: Inside the `speakX` database, create a collection named `datas`.
3. **Upload Data**: Upload your data into the `datas` collection to populate the database.

---

## Folder Structure

1. **Create a Folder**: Create a folder named `Search` on your local machine.
2. **Download the Project**: Clone or download the project files from GitHub into the `Search` folder.
3. **Frontend and Backend Folders**: Inside the `Search` folder, you will have two directories: one for the frontend and one for the backend.
4. **MongoDB Connection**: Obtain the MongoDB connection URL (from your local or cloud MongoDB service) and save it in a `.env` file inside the backend folder.

---

## Adding Dependencies

### Backend Dependencies
To install the required dependencies for the backend, navigate to the `backend` folder and run the following command in the terminal:
npm install body-parser@1.20.3 cors@2.8.5 dotenv@16.4.7 express@4.21.2 mongoose@8.9.5


### Frontend Dependencies
To install the required dependencies for the frontend, navigate to the `src`folder inside frontend folder and run the following command in the terminal:
npm install axios@1.7.9 react@18.3.1 react-dom@18.3.1 react-router-dom@7.1.3



## Running of project
**Backend**: The backend server is started using `node index.js` from the `backend` folder.
**Frontend**: The frontend server is started with `npm run dev` from the `frontend/src` folder.


