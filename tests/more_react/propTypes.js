var React = require('React');

var C = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  }
});
var D = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    ...C.propTypes,
  }
});

<D
  namee='foo' // error (as usual)
  titlee='bar' // OK (error ignored when spread is used)
/>;

/* TODO: Sam has temporarily regressed the above test, but is going to fix it
   real soon, and make it much better! */
