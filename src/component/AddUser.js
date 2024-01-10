import { useState } from 'react';

const AddUser = () => {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState(0);
  const [isMajor, setMajor] = useState(false);

  console.log(firstName);
  console.log(age);
  console.log(isMajor);

  const handleFirstName = e => {
    setFirstName(e.target.value);
  };

  const handleIsMajor = e => {
    setMajor(e.target.checked);
  };

  return (
    <form>
      <div>
        <label>Firstname</label>
        <input id='firstname' value={firstName} onChange={handleFirstName} />
      </div>
      <div>
        <label>Age</label>
        <input
          type='number'
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </div>
      <div>
        <input type='checkbox' checked={isMajor} onChange={handleIsMajor} />
        <label>Majeur ?</label>
      </div>
      <button>Add a user</button>
    </form>
  );
};

export default AddUser;
