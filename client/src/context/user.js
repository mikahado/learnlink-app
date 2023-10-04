import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for user data
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [teacherData, setTeacherData] = useState(null);

  console.log("new teacher data", teacherData)

  useEffect(() => {
    fetch('/check_session') 
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user data');
        }
      })
      .then((userData) => {
        setUser(userData);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
}, [loggedIn]);

  // Load user data when the component mounts

  // Function to log the user out
  const logout = () => {
    fetch('/logout', { method: 'DELETE' })
      .then((response) => {
        if (response.status === 204) {
          setUser(null);
        } else {
          throw new Error('Failed to log out');
        }
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <UserContext.Provider 
    value={{ 
        user, 
        logout,
        setTeacherData,
        teacherData,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };