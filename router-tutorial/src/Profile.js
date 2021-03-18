import React from 'react';

const profileData = {
  minjun: {
    name: '최민준',
    description: 'Android',
  },
  howon: {
    name: '조호원',
    description: 'Backend',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
