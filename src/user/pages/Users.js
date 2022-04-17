import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Avi",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQHzQDXXa6pJXA/profile-displayphoto-shrink_200_200/0/1613667850675?e=1652313600&v=beta&t=NenQfI_iT9M5EQ76_NRXo-C3Kr-blhtgvTtt6M1UXBU",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
