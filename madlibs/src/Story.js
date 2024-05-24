import React from "react";

function Story({ id, noun, noun2, adjective, color }) {
  return (
    <div>
      There was a {color} {noun} who loved a {adjective} {noun2}.
    </div>
  );
}

export default Story;
