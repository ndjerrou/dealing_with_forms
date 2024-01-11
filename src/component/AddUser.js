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

  const handleFormData = e =>
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }));

  const addHobby = e => {
    console.log('HERE');
    setHobbies(prevState => {
      return [...prevState, formData.hobby];
    });

    setFormData(prevState => ({ ...prevState, hobby: '' }));

    // getting hobby input via ref
    hobbyInputRef.current.focus();
  };

  const deleteHobby = clickedHobby => {
    // const filteredHobbies = hobbies.filter(hobby => {
    //   return hobby !== clickedHobby;
    // });
    const filteredHobbies = hobbies.filter(hobby => hobby !== clickedHobby);

    setHobbies(filteredHobbies);
  };

  const addUser = e => {
    e.preventDefault();

    // reinit values of formula
    setFormData({
      firstName: '',
      age: 0,
      isMajor: false,
      grade: 0,
    });

    // preparing data to server
  };

  console.log(formData.hobby);

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
      <div>
        {hobbies.map(hobby => (
          <div
            key={hobby}
            style={{ padding: '6px', backgroundColor: 'gold', width: '2Opx' }}
          >
            {hobby}
            <span
              style={{
                backgroundColor: 'red',
                marginLeft: '10px',
                cursor: 'pointer',
                border: 'none',
              }}
              onClick={() => deleteHobby(hobby)}
            >
              <i className='fa-solid fa-delete-left'></i>
            </span>
          </div>
        ))}
      </div>
      <button disabled>Add a user</button>
    </form>
  );
};

export default AddUser;
