import axios from "axios";

// save user data in database
export const saveUser = async (user, name, image) => {
   const currentUser = {
      name: user?.displayName || name,
      email: user?.email,
      image: user?.photoURL || image,
      role: 'user',
      status: 'Verified',
   };
   const { data } = await axios.post(`http://localhost:5000/users/${user?.email}`, currentUser);
   return data;
};