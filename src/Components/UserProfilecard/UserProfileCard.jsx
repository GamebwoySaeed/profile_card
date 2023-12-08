import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/profile_4.jpg'
const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className='gradient'>
            <div className='profile-down'>
                <img src={profile_icon} alt=''/>
                <div className='profile-title'>Sam Ninche</div>
                <div className='profile-description'>
                    I am a web developer and a computer vison engineer.
                     I have worked on Sentimental Analysis, Sign language recognition using LSTM and Media Pipe,
                      React applications such as a chat app,social media app, and a scheduler app. 
                      {/* I have also done UI/ UX design for a game app, program a mobile app for tracking bus times, 
                      and also been a leader for a project twice, where by i worked more as a project leader in one 
                      where we created a website to show food trucks and another where i worked as programmer 
                      for an image detection project while being the leader. */}
                </div>

            
            <div className='profile-button'>
                <a href='mailto:mikaheelyamaguchisaeed21@gmail.com'>
                    Contact Me
                </a>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default UserProfileCard