// pages/index.js  
import { useEffect, useState } from 'react';  
import { getUsers, createUser } from '../services/userService';  

const Home = () => {  
  const [users, setUsers] = useState([]);  
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');  

  useEffect(() => {  
    const fetchUsers = async () => {  
      const data = await getUsers();  
      setUsers(data);  
    };  
    fetchUsers();  
  }, []);  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    await createUser({ name, email });  
    setName('');  
    setEmail('');  
    const data = await getUsers();  
    setUsers(data);  
  };  

  return (  
    <div>  
      <h1>User Management</h1>  
      <form onSubmit={handleSubmit}>  
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />  
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />  
        <button type="submit">Create User</button>  
      </form>  
      <ul>  
        {users.map((user) => (  
          <li key={user.id}>{user.name} - {user.email}</li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default Home;  