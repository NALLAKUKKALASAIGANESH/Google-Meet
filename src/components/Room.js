import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = ()=> {
    const {roomid}=useParams();
    let      Meeting = async (element) => {
         const appID = 320866032;
         const serverSecret = "1c38e43251bddfd0f38f672d74bb879a";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid, Date.now().toString(), "Sai" );
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         zp.joinRoom({
           container:element,
           sharedLinks:[
            {
                name:"copy link",
                url:`http://localhost:3000/room/${roomid}`
            }
           ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton:false
         })
    }
    return(

        <div>
            <div  ref={Meeting}/>
        </div>
    )
}
export default Room