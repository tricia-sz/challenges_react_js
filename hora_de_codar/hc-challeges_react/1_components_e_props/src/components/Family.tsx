import Profile from "./Profile";

function Family({ members }:any) {
  return (
    <>
      {members.map((member:any, index:any) => (
        <Profile
          key={index}
          name={member.name}
          age={member.age}
          job={member.job}
        />
      ))}
    </>
  );
}

export default Family;