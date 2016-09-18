var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
      <div>
        <Nav/>
        <p> My Timer App </p>
        {props.children}
      </div>
  );
}

module.exports = Main;
