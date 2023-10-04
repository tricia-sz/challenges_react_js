import { useState } from 'react';


function RegistrationForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event: { target: { name: string; value: any } }) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handlleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handlleSubmit}>
      <div>
        {values.name}
        <p>nome:</p>
        <input
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>email:</p>
        <input
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>senha:</p>
        <input
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default RegistrationForm;
