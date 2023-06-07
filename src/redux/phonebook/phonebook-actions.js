import { createAction } from "@reduxjs/toolkit";

const remove = createAction('phonebook/remove');

const changeFilter = createAction('phonebook/changeFilter');

const actions = { remove, changeFilter };

export default actions;