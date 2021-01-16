import React from 'react';
import { withRouter } from 'react-router-dom';

const ChatroomPage = ({match, socket}) => {
    const chatroomId = match.params.id;

    return (
        <div className="chatroomPage">
            <div className="chatroomSection">
                <div className="cardHeader">Chatroom Name</div>
                <div className="chatroomContent">
                    <div className="message">
                        <span className="otherMessage">Son:</span> qweqwe
                    </div>
                </div>
                <div className="chatroomActions">
                    <div>
                        <input type="text" name="message" placeholder="Say Something!"/>
                    </div>
                    <div>
                        <button className="join">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(ChatroomPage);