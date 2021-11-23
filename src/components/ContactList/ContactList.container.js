import { connect } from "react-redux";

import { actions, getFilteredContacts } from "redux/contacts";
import ContactList from "./ContactList";

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(actions.deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
