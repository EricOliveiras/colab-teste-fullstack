import React, { useEffect, useState } from 'react';

import UserCard from '../../components/UserCard';
import { randomApi } from '../../service/random';

import './style.css';

const Home = () => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    const result = await randomApi.getUsers();
    setUsers(result);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      {!users ? (
        <p>Nada aqui</p>
      ) : (
        users.map((user) => {
          return (
            <UserCard
              picture={user.picture}
              name={`${user.name}`}
              gender={user.gender}
              email={user.email}
              phone={user.phone}
            />
          );
        })
      )}
    </div>
  );
};

export default Home;
