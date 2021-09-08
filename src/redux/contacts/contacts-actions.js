/** @format */
import { v4 as uuidv4 } from "uuid";

const formSubmit = ({ name, number }) => ({
  type: "add_Contact",
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

// export const deleteContact = (id) => {
//   return {
//     type: "delete_Contact",
//     payload: { id },
//   };
// };

export default formSubmit;
