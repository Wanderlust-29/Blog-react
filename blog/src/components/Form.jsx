import { useState } from "react";
import "./Form.css";


const Form = (props) => {
  const [values, setValues] = useState({
    submitted: false,
    lastName: "",
    firstName: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      submitted: false,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      firstName: values.firstName,
      lastName: values.lastName,
      message: values.message,
    };

    setSubmittedData(newUser);

    setValues({
      submitted: true,
      lastName: "",
      firstName: "",
      message: "",
    });
  };

  return (
    <>
      {submittedData && (
        <>
          <p>Prénom : {submittedData.firstName}</p>
          <p>Nom : {submittedData.lastName}</p>
          <p>message : {submittedData.message}</p>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Laisser un commentaire</h2>
          <label htmlFor="lastName">Votre nom :</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
          <label htmlFor="firstName">Votre prénom :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="33"
            placeholder="Votre commentaire..."
            value={values.message}
            onChange={handleInputChange}
          />
          <button>Envoyer</button>
        </fieldset>
      </form>
    </>
  );
};

export default Form;
