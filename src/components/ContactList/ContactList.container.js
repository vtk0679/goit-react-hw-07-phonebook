import { connect } from "react-redux";

import { actions, getFilteredContacts, isLoading } from "redux/contacts";
import ContactList from "./ContactList";

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
  loading: isLoading(state),
});

export default connect(mapStateToProps)(ContactList);
