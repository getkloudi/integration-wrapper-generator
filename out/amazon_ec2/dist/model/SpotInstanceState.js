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
* Enum class SpotInstanceState.
* @enum {}
* @readonly
*/
var SpotInstanceState =
/*#__PURE__*/
function () {
  function SpotInstanceState() {
    _classCallCheck(this, SpotInstanceState);

    _defineProperty(this, "open", "open");

    _defineProperty(this, "active", "active");

    _defineProperty(this, "closed", "closed");

    _defineProperty(this, "cancelled", "cancelled");

    _defineProperty(this, "failed", "failed");
  }

  _createClass(SpotInstanceState, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>SpotInstanceState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SpotInstanceState} The enum <code>SpotInstanceState</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return SpotInstanceState;
}();

exports["default"] = SpotInstanceState;