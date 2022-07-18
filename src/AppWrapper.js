import { connect } from "react-redux";
import App from "./App";
import { SETCATEGORY } from "./app/actions/counter";

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  SETCATEGORY,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
