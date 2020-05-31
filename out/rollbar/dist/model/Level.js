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
* Enum class Level.
* @enum {}
* @readonly
*/
var Level = /*#__PURE__*/function () {
  function Level() {
    _classCallCheck(this, Level);

    _defineProperty(this, "debug", "debug");

    _defineProperty(this, "info", "info");

    _defineProperty(this, "warning", "warning");

    _defineProperty(this, "error", "error");

    _defineProperty(this, "critical", "critical");
  }

  _createClass(Level, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>Level</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Level} The enum <code>Level</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return Level;
}();

exports["default"] = Level;