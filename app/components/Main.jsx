var React = require('react');
var Navigation = require('Navigation');

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
var Main = (props) => {
  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="small-centered medium-6 large-4 columns">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
