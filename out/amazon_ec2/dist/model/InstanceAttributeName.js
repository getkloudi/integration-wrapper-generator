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
* Enum class InstanceAttributeName.
* @enum {}
* @readonly
*/
var InstanceAttributeName =
/*#__PURE__*/
function () {
  function InstanceAttributeName() {
    _classCallCheck(this, InstanceAttributeName);

    _defineProperty(this, "instanceType", "instanceType");

    _defineProperty(this, "kernel", "kernel");

    _defineProperty(this, "ramdisk", "ramdisk");

    _defineProperty(this, "userData", "userData");

    _defineProperty(this, "disableApiTermination", "disableApiTermination");

    _defineProperty(this, "instanceInitiatedShutdownBehavior", "instanceInitiatedShutdownBehavior");

    _defineProperty(this, "rootDeviceName", "rootDeviceName");

    _defineProperty(this, "blockDeviceMapping", "blockDeviceMapping");

    _defineProperty(this, "productCodes", "productCodes");

    _defineProperty(this, "sourceDestCheck", "sourceDestCheck");

    _defineProperty(this, "groupSet", "groupSet");

    _defineProperty(this, "ebsOptimized", "ebsOptimized");

    _defineProperty(this, "sriovNetSupport", "sriovNetSupport");

    _defineProperty(this, "enaSupport", "enaSupport");
  }

  _createClass(InstanceAttributeName, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>InstanceAttributeName</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/InstanceAttributeName} The enum <code>InstanceAttributeName</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return InstanceAttributeName;
}();

exports["default"] = InstanceAttributeName;