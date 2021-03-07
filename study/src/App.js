import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: '손채건',
      email: 'thscorjs1002@naver.com',
    },
    {
      id: 2,
      username: '조호원',
      email: 'howon@naver.com',
    },
    {
      id: 3,
      username: '정지원',
      email: 'jiwon@naver.com',
    },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  };

  return <UserList users={users} />;
}

export default App;
