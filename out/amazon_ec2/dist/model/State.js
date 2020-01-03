"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class State.
* @enum {}
* @readonly
*/
var State =
/*#__PURE__*/
function () {
  function State() {
    _classCallCheck(this, State);

    _defineProperty(this, "PendingAcceptance", "PendingAcceptance");

    _defineProperty(this, "Pending", "Pending");

    _defineProperty(this, "Available", "Available");

    _defineProperty(this, "Deleting", "Deleting");

    _defineProperty(this, "Deleted", "Deleted");

    _defineProperty(this, "Rejected", "Rejected");

    _defineProperty(this, "Failed", "Failed");

    _defineProperty(this, "Expired", "Expired");
  }

  _createClass(State, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>State</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/State} The enum <code>State</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return State;
}();

exports["default"] = State;