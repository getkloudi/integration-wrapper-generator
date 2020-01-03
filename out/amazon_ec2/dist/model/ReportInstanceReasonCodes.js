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
* Enum class ReportInstanceReasonCodes.
* @enum {}
* @readonly
*/
var ReportInstanceReasonCodes =
/*#__PURE__*/
function () {
  function ReportInstanceReasonCodes() {
    _classCallCheck(this, ReportInstanceReasonCodes);

    _defineProperty(this, "instance-stuck-in-state", "instance-stuck-in-state");

    _defineProperty(this, "unresponsive", "unresponsive");

    _defineProperty(this, "not-accepting-credentials", "not-accepting-credentials");

    _defineProperty(this, "password-not-available", "password-not-available");

    _defineProperty(this, "performance-network", "performance-network");

    _defineProperty(this, "performance-instance-store", "performance-instance-store");

    _defineProperty(this, "performance-ebs-volume", "performance-ebs-volume");

    _defineProperty(this, "performance-other", "performance-other");

    _defineProperty(this, "other", "other");
  }

  _createClass(ReportInstanceReasonCodes, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>ReportInstanceReasonCodes</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ReportInstanceReasonCodes} The enum <code>ReportInstanceReasonCodes</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return ReportInstanceReasonCodes;
}();

exports["default"] = ReportInstanceReasonCodes;