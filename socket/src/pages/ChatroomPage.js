import React from 'react';
import { withRouter } from 'react-router-dom';

const ChatroomPage = ({match, socket}) => {
    const chatroomId = match.params.id;
    const [messages, setMessages] = React.useState([]);
    const messageRef = React.useRef();

    const sendMessage = () => {
        if(socket) {
            socket.emit("chatroomMessage", {
                chatroomId,
                message: messageRef.current.value,
            });
        }
    }

    React.useEffect(() => {
        socket.emit("joinRoom", {
            chatroomId,
        });

        socket.on("newMessage", (message) => {
            setMessages([...messages, message]);
        })

        return () => {
            //Component Unmount
            if(socket){
                socket.emit("leaveRoom", {
                    chatroomId
                });
            }
        }

        //eslint-disable-next-line
    }, [])

    return (
        <div className="chatroomPage">
            <div className="chatroomSection">
                <div className="cardHeader">Chatroom Name</div>
                <div className="chatroomContent">
                    {messages.map(message => {
                        <div key={chatroomId} className="message">
                            <span className="otherMessage">{message.name}</span>{message.message}
                        </div>
                    })}
                </div>
                <div className="chatroomActions">
                    <div>
                        <input type="text" name="message" placeholder="Say Something!" ref={messageRef}/>
                    </div>
                    <div>
                        <button className="join" onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(ChatroomPage);