import React from 'react';

const DashboardPage = () => {
    return (
        <div className="card">
            <div className="cardHeader">Chatrooms</div>
            <div className="cardBody">
                <div className="inputGroup">
                    <label htmlFor="chatroomName">Chatroom Name</label>
                    <input type="text" name="chatroomName" id="chatroomName" placeholder="Chatroom Name"></input>
                </div>
                <button>Create Chatroom</button>
                <div className="chatrooms">
                    <div className="chatroom">
                        <div>Happy Newbie</div>
                        <div className="join">Join</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;