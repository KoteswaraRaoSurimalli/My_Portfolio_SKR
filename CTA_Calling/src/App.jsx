import React from "react";
import CallNowButton from "./CallNowButton";

function App() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>Click the button below to call me anytime.</p>

      {/* Floating Call Now Button with Pulse Effect */}
      <CallNowButton />
    </div>
  );
}

export default App;
