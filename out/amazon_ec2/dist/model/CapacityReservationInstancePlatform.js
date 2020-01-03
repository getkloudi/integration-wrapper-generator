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
* Enum class CapacityReservationInstancePlatform.
* @enum {}
* @readonly
*/
var CapacityReservationInstancePlatform =
/*#__PURE__*/
function () {
  function CapacityReservationInstancePlatform() {
    _classCallCheck(this, CapacityReservationInstancePlatform);

    _defineProperty(this, "Linux/UNIX", "Linux/UNIX");

    _defineProperty(this, "Red Hat Enterprise Linux", "Red Hat Enterprise Linux");

    _defineProperty(this, "SUSE Linux", "SUSE Linux");

    _defineProperty(this, "Windows", "Windows");

    _defineProperty(this, "Windows with SQL Server", "Windows with SQL Server");

    _defineProperty(this, "Windows with SQL Server Enterprise", "Windows with SQL Server Enterprise");

    _defineProperty(this, "Windows with SQL Server Standard", "Windows with SQL Server Standard");

    _defineProperty(this, "Windows with SQL Server Web", "Windows with SQL Server Web");

    _defineProperty(this, "Linux with SQL Server Standard", "Linux with SQL Server Standard");

    _defineProperty(this, "Linux with SQL Server Web", "Linux with SQL Server Web");

    _defineProperty(this, "Linux with SQL Server Enterprise", "Linux with SQL Server Enterprise");
  }

  _createClass(CapacityReservationInstancePlatform, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>CapacityReservationInstancePlatform</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CapacityReservationInstancePlatform} The enum <code>CapacityReservationInstancePlatform</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return CapacityReservationInstancePlatform;
}();

exports["default"] = CapacityReservationInstancePlatform;