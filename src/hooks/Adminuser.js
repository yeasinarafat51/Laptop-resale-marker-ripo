// import { useEffect, useState } from "react";
// const Adminuser = (email) => {
//   //   console.log(email);
//   const [isAdmin, setIsAdmin] = useState([]);

//   const [isAdminLoading, setIsAdminLoading] = useState(true);

//   useEffect(() => {
//     if (email) {
//       fetch(`http://localhost:5000/emaildata/${email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           // console.log(data);
//           setIsAdmin(data);
//           setIsAdminLoading(false);
//         });
//     }
//   }, [email]);
//   return [isAdmin, isAdminLoading];
// };

// export default Adminuser;