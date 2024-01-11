import { useState, useRef } from 'react';
// import { useFormStatus } from 'react-dom';

const AddUser = () => {
  // const { pending } = useFormStatus();

  const hobbyInputRef = useRef();

  const [formData, setFormData] = useState({
    firstName: '',
    age: 0,
    isMajor: false,
    grade: 100,
    hobby: '',
  });

  const [hobbies, setHobbies] = useState([]);

  // console.log(formData);
  // console.log(hobbies);
  const handleFormData = e =>
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));

  const addHobby = e => {
    setHobbies(prevState => {
      return [...prevState, formData.hobby];
    });

    setFormData(prevState => ({ ...prevState, hobby: '' }));

    // getting hobby input via ref
    hobbyInputRef.current.focus();
  };

  const addUser = e => {
    e.preventDefault();
    console.log('submit fired');

    console.log(formData);

    // sending data to server

    // reinit values of formula
    setFormData({
      firstName: '',
      age: 0,
      isMajor: false,
      grade: 0,
    });
  };

  return (
    <form onSubmit={addUser}>
      <div>
        <label>Firstname</label>
        <input
          value={formData.firstName}
          onChange={handleFormData}
          name='firstName'
        />
      </div>

      <div>
        <label>Age</label>
        <input
          type='number'
          value={formData.age}
          onChange={handleFormData}
          name='age'
        />
      </div>
      <div>
        <input
          type='checkbox'
          checked={formData.isMajor}
          onChange={handleFormData}
          name='isMajor'
        />
        <label>Majeur ?</label>
      </div>
      <div>
        <div>
          <label>Note au dernier examen</label>
          <input
            type='range'
            value={formData.grade}
            onChange={handleFormData}
            name='grade'
          />
        </div>
      </div>
      <div>
        <div>
          <label>Mes hobbies</label>
          <input
            value={formData.hobby}
            onChange={handleFormData}
            name='hobby'
            style={{ width: '90px' }}
            ref={hobbyInputRef}
          />
          <button
            disabled={formData.hobby.length < 3}
            type='button'
            onClick={addHobby}
          >
            Add a hobby
          </button>
        </div>
      </div>
      <button disabled>Add a user</button>
    </form>
  );
};

export default AddUser;

// Refacto avec un seul objet pour le state
// Event Submit
// Envoi data ver serveurs
// Ajouter des amis dans le formulaire
// time for crud ?
