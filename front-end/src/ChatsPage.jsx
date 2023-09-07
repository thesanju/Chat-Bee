import React from 'react';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '86b44a68-2a3b-4107-bf36-5d8249e46c7b',
         props.user.username, 
         props.user.secret
         );
         
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100vh'}} />
    </div>
    )
}

export default ChatsPage