import { useState } from 'react';
// import { useFormStatus } from 'react-dom';

const AddUser = () => {
  // const { pending } = useFormStatus();
  const [formData, setFormData] = useState({
    firstName: '',
    age: 0,
    isMajor: false,
    grade: 100,
  });

  const handleFormData = e =>
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));

  const addUser = e => {
    e.preventDefault();
    console.log('submit fired');

    console.log(formData);

    // sending data to server

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
        {/* Ex */}
        {/* @TODO: feature -->ajout un hobby */}
        {/* le hobby apparaît en dessous */}
        {/* je peux le supprimer en cliquant dessus */}
        {/* reset la valeur de hobby dans le input */}
        <div>
          <label>Mes hobbies</label>
          <input
            type='text'
            // value=''
            // onChange={handleFormData}
            // name='grade'
          />
        </div>
      </div>
      {/* Ex */}
      {/* @TODO: feature -->enable conditionnaly the btn */}
      {/* le btn est activé si on a ajouté 3 amis */}

      {/* Render conditionnaly some jsx */}
      {false && (
        <p style={{ color: 'red' }}>3 amis obligatoires avant soumission</p>
      )}

      {false ? <p>Salut</p> : <p>Aurevoir</p>}
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
