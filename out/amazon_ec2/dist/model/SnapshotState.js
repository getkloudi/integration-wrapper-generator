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
* Enum class SnapshotState.
* @enum {}
* @readonly
*/
var SnapshotState =
/*#__PURE__*/
function () {
  function SnapshotState() {
    _classCallCheck(this, SnapshotState);

    _defineProperty(this, "pending", "pending");

    _defineProperty(this, "completed", "completed");

    _defineProperty(this, "error", "error");
  }

  _createClass(SnapshotState, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>SnapshotState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SnapshotState} The enum <code>SnapshotState</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return SnapshotState;
}();

exports["default"] = SnapshotState;