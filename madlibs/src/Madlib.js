import React, { useState } from "react";
import Form from "./Form.js";
import Story from "./Story.js";
import { v4 as uuidv4 } from "uuid";

function Madlib() {
  const [stories, setStories] = useState([]);

  /** Add new story to list. */
  const addStory = (newStory) => {
    setStories((stories) => [...stories, { ...newStory, id: uuidv4() }]);
  };
  return (
    <div>
      <Form addStory={addStory} />
      <div>
        {stories.map(({ id, noun, noun2, adjective, color }) => (
          <Story
            id={id}
            noun={noun}
            noun2={noun2}
            adjective={adjective}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}

export default Madlib;
