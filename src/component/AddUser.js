import { useState } from 'react';

const AddUser = () => {
  const [firstName, setFirstName] = useState('');

  console.log(firstName);

  const handleFirstName = e => {
    setFirstName(e.target.value);
  };

  return (
    <form>
      <div>
        <label>Firstname</label>
        <input id='firstname' value={firstName} onChange={handleFirstName} />
      </div>
      <div>
        <label>Age</label>
        <input type='number' value='' />
      </div>
      <div>
        <input type='checkbox' value='' />
        <label>Majeur ?</label>
      </div>
      <button>Add a user</button>
    </form>
  );
};

export default AddUser;
