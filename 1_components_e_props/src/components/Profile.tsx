// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Profile({ name, age, job }: any) {
  return (
    <>
      <h3>Nome: {name}</h3>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
    </>
  );
}

export default Profile;