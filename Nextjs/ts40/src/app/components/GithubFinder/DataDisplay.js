import React from 'react'

export default function DataDisplay({user}) {
  return (
    <div className='user-card'>
        <img src={user.avatar_url} alt="profile-pic"/>
        <h2>{user.name}</h2>
        <p>Description : {user.bio}</p>
        <strong>Followers : {user.followers}</strong> <br />
        <strong>Following: {user.following}</strong>
        <h2>Repositories : {user.public_repos}</h2>
    </div>
  )
}
