require('dotenv').config()
var ComfyJS = require("comfy.js");

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( flags.broadcaster && command === "test" ) {
    console.log( "!test was typed in chat" );
  }
  if( command === "wesh" ) {
    console.log( "wesh alors !" );
  }
  if (flags.broadcaster || flags.mod && command === "wesh" ) {
    console.log( "wesh alors les modos !" );
    ComfyJS.Say( "replying to !wesh (if broadcaster or mod)" );
  }
  if (flags.highlighted) {
      console.log( "highlighted")
  }
}

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    console.log( user, message );
}

ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH, "iamfabriceg" );