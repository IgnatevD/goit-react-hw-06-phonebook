/** @format */

import s from "../Filter/Filter.module.css";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import allActions from "../../redux/contacts/contacts-actions";

const Filter = ({ value, handleFilterChange }) => {
  const idFilter = uuidv4();
  return (
    <div className={s.filterContener}>
      <label htmlFor={idFilter} className={s.labelFilter}>
        Поиск контактов по имени и фамили
      </label>
      <input
        id={idFilter}
        className={s.inputFilter}
        type="text"
        value={value}
        onChange={handleFilterChange}
        placeholder="Поиск"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
    </div>
  );
};

const mapStateProp = (state) => ({
  value: state.filters,
});
const mapDisp = (disp) => ({
  handleFilterChange: (e) => disp(allActions.filters(e.target.value)),
});

export default connect(mapStateProp, mapDisp)(Filter);
