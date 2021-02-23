import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
