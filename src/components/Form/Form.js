import React from 'react';
import './Form.css';
import {Button} from '../Button/Button.js';
import {TextInput} from '../TextInput/TextInput.js';

export const Form = ({handleAddClick}) => {
  return (
    <form className="Form">
      <fieldset>
      <label htmlFor="animalInput">Animal</label>
      <TextInput
        id="animalInput"
        placeHolder="e.g. Dog"
      />
      </fieldset>
      <fieldset>
      <label htmlFor="descriptionInput">Description</label>
      <TextInput
        id="descriptionInput"
        placeHolder="e.g. Brown"
      />
      </fieldset>
      <fieldset>
      <label htmlFor="ageInput">Age</label>
      <TextInput
        type="number"
        id="ageInput"
        placeHolder="e.g. 10"
      />
      </fieldset>
      <fieldset>
      <label htmlFor="priceInput">Price</label>
      <TextInput
        id="priceInput"
        placeHolder="e.g. 250"
      />
      </fieldset>
      <Button buttonid={0} sizeId="form-button-size" iconSource={"./images/add.png"} handleClick={handleAddClick}/>
  </form>
  );
}