import React, { useState } from "react";

/** Form for creating a new story.
 *
 * Has state for the noun, noun2, adjective, color of the story; on * submission, sends {noun, noun2, adjective, color} to fn rec'd
 * from parent.
 *
 */
function Form({ addStory }) {
  const initialState = {
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  };
  const [formData, setFormData] = useState(initialState);

  /** Update local state w/curr state of input elem */
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  /** Send {noun, noun2, adjective, color} to parent
   *    & clear form. */
  function handleSumbit(e) {
    e.preventDefault();
    addStory(formData);
    setFormData(initialState);
  }

  /** render form */
  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="noun"></label>
      <input
        id="noun"
        name="noun"
        placeholder="noun"
        type="text"
        value={formData.noun}
        onChange={handleChange}
      ></input>
      <br></br>

      <label htmlFor="noun2"></label>
      <input
        id="noun2"
        name="noun2"
        placeholder="noun2"
        type="text"
        value={formData.noun2}
        onChange={handleChange}
      ></input>
      <br></br>

      <label htmlFor="adjective"></label>
      <input
        id="adjective"
        name="adjective"
        placeholder="adjective"
        type="text"
        value={formData.adjective}
        onChange={handleChange}
      ></input>
      <br></br>

      <label htmlFor="color"></label>
      <input
        id="color"
        name="color"
        placeholder="color"
        type="text"
        value={formData.color}
        onChange={handleChange}
      ></input>
      <br></br>
      <button>Get Story</button>
    </form>
  );
}

export default Form;
