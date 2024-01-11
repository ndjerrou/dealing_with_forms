import { useState } from 'react';

const AddUser = () => {
  // const [firstName, setFirstName] = useState('');
  // const [age, setAge] = useState(0);
  // const [isMajor, setMajor] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    age: 0,
    isMajor: false,
    grade: 0,
  });

  console.log(formData);

  // const handleFormData = e => {
  //   setFormData(prevState => {
  //     return {
  //       ...prevState,
  //       [e.target.name]:
  //         e.target.type === 'checkbox' ? e.target.checked : e.target.value,
  //     };
  //   });
  // };

  // 🔺 🔺 🔺 is the same as 🔻 🔻 🔻

  const handleFormData = e =>
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));

  return (
    <form>
      <div>
        <label>Firstname</label>
        <input
          id='firstname'
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
          <label>Note au dernier examen ?</label>
        </div>
        <input
          type='range'
          checked={formData.grade}
          onChange={handleFormData}
          name='grade'
        />
      </div>
      <button>Add a user</button>
    </form>
  );
};

export default AddUser;

// Refacto avec un seul objet pour le state
// Event Submit
// Envoi data ver serveurs
// Ajouter des amis dans le formulaire
// time for crud ?
