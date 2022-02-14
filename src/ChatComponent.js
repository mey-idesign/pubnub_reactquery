
import React from "react";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat, MessageList, MessageInput } from "@pubnub/react-chat-components";

export default function ChatComponent({ user }) {
    const pubnub = new PubNub({
      publishKey: "pub-c-3f81aa1c-a8a5-4905-9c24-7768dad1d4c4",
      subscribeKey: "sub-c-5be227d2-7e5b-11ec-a8e0-96a4ceb4990f",
      uuid: user,
    });
    const currentChannel = "poc_demo_1";
    const theme = "light";
  
    return (
      <PubNubProvider client={pubnub}>
        <Chat {...{ currentChannel, theme }}>
          <div style={{ height: "500px" }}>
            <MessageList fetchMessages={10} />
          </div>
          <MessageInput />
        </Chat>
      </PubNubProvider>
    );
  };