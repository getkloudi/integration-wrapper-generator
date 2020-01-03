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
* Enum class InstanceType.
* @enum {}
* @readonly
*/
var InstanceType =
/*#__PURE__*/
function () {
  function InstanceType() {
    _classCallCheck(this, InstanceType);

    _defineProperty(this, "t1.micro", "t1.micro");

    _defineProperty(this, "t2.nano", "t2.nano");

    _defineProperty(this, "t2.micro", "t2.micro");

    _defineProperty(this, "t2.small", "t2.small");

    _defineProperty(this, "t2.medium", "t2.medium");

    _defineProperty(this, "t2.large", "t2.large");

    _defineProperty(this, "t2.xlarge", "t2.xlarge");

    _defineProperty(this, "t2.2xlarge", "t2.2xlarge");

    _defineProperty(this, "t3.nano", "t3.nano");

    _defineProperty(this, "t3.micro", "t3.micro");

    _defineProperty(this, "t3.small", "t3.small");

    _defineProperty(this, "t3.medium", "t3.medium");

    _defineProperty(this, "t3.large", "t3.large");

    _defineProperty(this, "t3.xlarge", "t3.xlarge");

    _defineProperty(this, "t3.2xlarge", "t3.2xlarge");

    _defineProperty(this, "t3a.nano", "t3a.nano");

    _defineProperty(this, "t3a.micro", "t3a.micro");

    _defineProperty(this, "t3a.small", "t3a.small");

    _defineProperty(this, "t3a.medium", "t3a.medium");

    _defineProperty(this, "t3a.large", "t3a.large");

    _defineProperty(this, "t3a.xlarge", "t3a.xlarge");

    _defineProperty(this, "t3a.2xlarge", "t3a.2xlarge");

    _defineProperty(this, "m1.small", "m1.small");

    _defineProperty(this, "m1.medium", "m1.medium");

    _defineProperty(this, "m1.large", "m1.large");

    _defineProperty(this, "m1.xlarge", "m1.xlarge");

    _defineProperty(this, "m3.medium", "m3.medium");

    _defineProperty(this, "m3.large", "m3.large");

    _defineProperty(this, "m3.xlarge", "m3.xlarge");

    _defineProperty(this, "m3.2xlarge", "m3.2xlarge");

    _defineProperty(this, "m4.large", "m4.large");

    _defineProperty(this, "m4.xlarge", "m4.xlarge");

    _defineProperty(this, "m4.2xlarge", "m4.2xlarge");

    _defineProperty(this, "m4.4xlarge", "m4.4xlarge");

    _defineProperty(this, "m4.10xlarge", "m4.10xlarge");

    _defineProperty(this, "m4.16xlarge", "m4.16xlarge");

    _defineProperty(this, "m2.xlarge", "m2.xlarge");

    _defineProperty(this, "m2.2xlarge", "m2.2xlarge");

    _defineProperty(this, "m2.4xlarge", "m2.4xlarge");

    _defineProperty(this, "cr1.8xlarge", "cr1.8xlarge");

    _defineProperty(this, "r3.large", "r3.large");

    _defineProperty(this, "r3.xlarge", "r3.xlarge");

    _defineProperty(this, "r3.2xlarge", "r3.2xlarge");

    _defineProperty(this, "r3.4xlarge", "r3.4xlarge");

    _defineProperty(this, "r3.8xlarge", "r3.8xlarge");

    _defineProperty(this, "r4.large", "r4.large");

    _defineProperty(this, "r4.xlarge", "r4.xlarge");

    _defineProperty(this, "r4.2xlarge", "r4.2xlarge");

    _defineProperty(this, "r4.4xlarge", "r4.4xlarge");

    _defineProperty(this, "r4.8xlarge", "r4.8xlarge");

    _defineProperty(this, "r4.16xlarge", "r4.16xlarge");

    _defineProperty(this, "r5.large", "r5.large");

    _defineProperty(this, "r5.xlarge", "r5.xlarge");

    _defineProperty(this, "r5.2xlarge", "r5.2xlarge");

    _defineProperty(this, "r5.4xlarge", "r5.4xlarge");

    _defineProperty(this, "r5.8xlarge", "r5.8xlarge");

    _defineProperty(this, "r5.12xlarge", "r5.12xlarge");

    _defineProperty(this, "r5.16xlarge", "r5.16xlarge");

    _defineProperty(this, "r5.24xlarge", "r5.24xlarge");

    _defineProperty(this, "r5.metal", "r5.metal");

    _defineProperty(this, "r5a.large", "r5a.large");

    _defineProperty(this, "r5a.xlarge", "r5a.xlarge");

    _defineProperty(this, "r5a.2xlarge", "r5a.2xlarge");

    _defineProperty(this, "r5a.4xlarge", "r5a.4xlarge");

    _defineProperty(this, "r5a.8xlarge", "r5a.8xlarge");

    _defineProperty(this, "r5a.12xlarge", "r5a.12xlarge");

    _defineProperty(this, "r5a.16xlarge", "r5a.16xlarge");

    _defineProperty(this, "r5a.24xlarge", "r5a.24xlarge");

    _defineProperty(this, "r5d.large", "r5d.large");

    _defineProperty(this, "r5d.xlarge", "r5d.xlarge");

    _defineProperty(this, "r5d.2xlarge", "r5d.2xlarge");

    _defineProperty(this, "r5d.4xlarge", "r5d.4xlarge");

    _defineProperty(this, "r5d.8xlarge", "r5d.8xlarge");

    _defineProperty(this, "r5d.12xlarge", "r5d.12xlarge");

    _defineProperty(this, "r5d.16xlarge", "r5d.16xlarge");

    _defineProperty(this, "r5d.24xlarge", "r5d.24xlarge");

    _defineProperty(this, "r5d.metal", "r5d.metal");

    _defineProperty(this, "r5ad.large", "r5ad.large");

    _defineProperty(this, "r5ad.xlarge", "r5ad.xlarge");

    _defineProperty(this, "r5ad.2xlarge", "r5ad.2xlarge");

    _defineProperty(this, "r5ad.4xlarge", "r5ad.4xlarge");

    _defineProperty(this, "r5ad.8xlarge", "r5ad.8xlarge");

    _defineProperty(this, "r5ad.12xlarge", "r5ad.12xlarge");

    _defineProperty(this, "r5ad.16xlarge", "r5ad.16xlarge");

    _defineProperty(this, "r5ad.24xlarge", "r5ad.24xlarge");

    _defineProperty(this, "x1.16xlarge", "x1.16xlarge");

    _defineProperty(this, "x1.32xlarge", "x1.32xlarge");

    _defineProperty(this, "x1e.xlarge", "x1e.xlarge");

    _defineProperty(this, "x1e.2xlarge", "x1e.2xlarge");

    _defineProperty(this, "x1e.4xlarge", "x1e.4xlarge");

    _defineProperty(this, "x1e.8xlarge", "x1e.8xlarge");

    _defineProperty(this, "x1e.16xlarge", "x1e.16xlarge");

    _defineProperty(this, "x1e.32xlarge", "x1e.32xlarge");

    _defineProperty(this, "i2.xlarge", "i2.xlarge");

    _defineProperty(this, "i2.2xlarge", "i2.2xlarge");

    _defineProperty(this, "i2.4xlarge", "i2.4xlarge");

    _defineProperty(this, "i2.8xlarge", "i2.8xlarge");

    _defineProperty(this, "i3.large", "i3.large");

    _defineProperty(this, "i3.xlarge", "i3.xlarge");

    _defineProperty(this, "i3.2xlarge", "i3.2xlarge");

    _defineProperty(this, "i3.4xlarge", "i3.4xlarge");

    _defineProperty(this, "i3.8xlarge", "i3.8xlarge");

    _defineProperty(this, "i3.16xlarge", "i3.16xlarge");

    _defineProperty(this, "i3.metal", "i3.metal");

    _defineProperty(this, "i3en.large", "i3en.large");

    _defineProperty(this, "i3en.xlarge", "i3en.xlarge");

    _defineProperty(this, "i3en.2xlarge", "i3en.2xlarge");

    _defineProperty(this, "i3en.3xlarge", "i3en.3xlarge");

    _defineProperty(this, "i3en.6xlarge", "i3en.6xlarge");

    _defineProperty(this, "i3en.12xlarge", "i3en.12xlarge");

    _defineProperty(this, "i3en.24xlarge", "i3en.24xlarge");

    _defineProperty(this, "i3en.metal", "i3en.metal");

    _defineProperty(this, "hi1.4xlarge", "hi1.4xlarge");

    _defineProperty(this, "hs1.8xlarge", "hs1.8xlarge");

    _defineProperty(this, "c1.medium", "c1.medium");

    _defineProperty(this, "c1.xlarge", "c1.xlarge");

    _defineProperty(this, "c3.large", "c3.large");

    _defineProperty(this, "c3.xlarge", "c3.xlarge");

    _defineProperty(this, "c3.2xlarge", "c3.2xlarge");

    _defineProperty(this, "c3.4xlarge", "c3.4xlarge");

    _defineProperty(this, "c3.8xlarge", "c3.8xlarge");

    _defineProperty(this, "c4.large", "c4.large");

    _defineProperty(this, "c4.xlarge", "c4.xlarge");

    _defineProperty(this, "c4.2xlarge", "c4.2xlarge");

    _defineProperty(this, "c4.4xlarge", "c4.4xlarge");

    _defineProperty(this, "c4.8xlarge", "c4.8xlarge");

    _defineProperty(this, "c5.large", "c5.large");

    _defineProperty(this, "c5.xlarge", "c5.xlarge");

    _defineProperty(this, "c5.2xlarge", "c5.2xlarge");

    _defineProperty(this, "c5.4xlarge", "c5.4xlarge");

    _defineProperty(this, "c5.9xlarge", "c5.9xlarge");

    _defineProperty(this, "c5.12xlarge", "c5.12xlarge");

    _defineProperty(this, "c5.18xlarge", "c5.18xlarge");

    _defineProperty(this, "c5.24xlarge", "c5.24xlarge");

    _defineProperty(this, "c5.metal", "c5.metal");

    _defineProperty(this, "c5d.large", "c5d.large");

    _defineProperty(this, "c5d.xlarge", "c5d.xlarge");

    _defineProperty(this, "c5d.2xlarge", "c5d.2xlarge");

    _defineProperty(this, "c5d.4xlarge", "c5d.4xlarge");

    _defineProperty(this, "c5d.9xlarge", "c5d.9xlarge");

    _defineProperty(this, "c5d.12xlarge", "c5d.12xlarge");

    _defineProperty(this, "c5d.18xlarge", "c5d.18xlarge");

    _defineProperty(this, "c5d.24xlarge", "c5d.24xlarge");

    _defineProperty(this, "c5d.metal", "c5d.metal");

    _defineProperty(this, "c5n.large", "c5n.large");

    _defineProperty(this, "c5n.xlarge", "c5n.xlarge");

    _defineProperty(this, "c5n.2xlarge", "c5n.2xlarge");

    _defineProperty(this, "c5n.4xlarge", "c5n.4xlarge");

    _defineProperty(this, "c5n.9xlarge", "c5n.9xlarge");

    _defineProperty(this, "c5n.18xlarge", "c5n.18xlarge");

    _defineProperty(this, "cc1.4xlarge", "cc1.4xlarge");

    _defineProperty(this, "cc2.8xlarge", "cc2.8xlarge");

    _defineProperty(this, "g2.2xlarge", "g2.2xlarge");

    _defineProperty(this, "g2.8xlarge", "g2.8xlarge");

    _defineProperty(this, "g3.4xlarge", "g3.4xlarge");

    _defineProperty(this, "g3.8xlarge", "g3.8xlarge");

    _defineProperty(this, "g3.16xlarge", "g3.16xlarge");

    _defineProperty(this, "g3s.xlarge", "g3s.xlarge");

    _defineProperty(this, "g4dn.xlarge", "g4dn.xlarge");

    _defineProperty(this, "g4dn.2xlarge", "g4dn.2xlarge");

    _defineProperty(this, "g4dn.4xlarge", "g4dn.4xlarge");

    _defineProperty(this, "g4dn.8xlarge", "g4dn.8xlarge");

    _defineProperty(this, "g4dn.12xlarge", "g4dn.12xlarge");

    _defineProperty(this, "g4dn.16xlarge", "g4dn.16xlarge");

    _defineProperty(this, "cg1.4xlarge", "cg1.4xlarge");

    _defineProperty(this, "p2.xlarge", "p2.xlarge");

    _defineProperty(this, "p2.8xlarge", "p2.8xlarge");

    _defineProperty(this, "p2.16xlarge", "p2.16xlarge");

    _defineProperty(this, "p3.2xlarge", "p3.2xlarge");

    _defineProperty(this, "p3.8xlarge", "p3.8xlarge");

    _defineProperty(this, "p3.16xlarge", "p3.16xlarge");

    _defineProperty(this, "p3dn.24xlarge", "p3dn.24xlarge");

    _defineProperty(this, "d2.xlarge", "d2.xlarge");

    _defineProperty(this, "d2.2xlarge", "d2.2xlarge");

    _defineProperty(this, "d2.4xlarge", "d2.4xlarge");

    _defineProperty(this, "d2.8xlarge", "d2.8xlarge");

    _defineProperty(this, "f1.2xlarge", "f1.2xlarge");

    _defineProperty(this, "f1.4xlarge", "f1.4xlarge");

    _defineProperty(this, "f1.16xlarge", "f1.16xlarge");

    _defineProperty(this, "m5.large", "m5.large");

    _defineProperty(this, "m5.xlarge", "m5.xlarge");

    _defineProperty(this, "m5.2xlarge", "m5.2xlarge");

    _defineProperty(this, "m5.4xlarge", "m5.4xlarge");

    _defineProperty(this, "m5.8xlarge", "m5.8xlarge");

    _defineProperty(this, "m5.12xlarge", "m5.12xlarge");

    _defineProperty(this, "m5.16xlarge", "m5.16xlarge");

    _defineProperty(this, "m5.24xlarge", "m5.24xlarge");

    _defineProperty(this, "m5.metal", "m5.metal");

    _defineProperty(this, "m5a.large", "m5a.large");

    _defineProperty(this, "m5a.xlarge", "m5a.xlarge");

    _defineProperty(this, "m5a.2xlarge", "m5a.2xlarge");

    _defineProperty(this, "m5a.4xlarge", "m5a.4xlarge");

    _defineProperty(this, "m5a.8xlarge", "m5a.8xlarge");

    _defineProperty(this, "m5a.12xlarge", "m5a.12xlarge");

    _defineProperty(this, "m5a.16xlarge", "m5a.16xlarge");

    _defineProperty(this, "m5a.24xlarge", "m5a.24xlarge");

    _defineProperty(this, "m5d.large", "m5d.large");

    _defineProperty(this, "m5d.xlarge", "m5d.xlarge");

    _defineProperty(this, "m5d.2xlarge", "m5d.2xlarge");

    _defineProperty(this, "m5d.4xlarge", "m5d.4xlarge");

    _defineProperty(this, "m5d.8xlarge", "m5d.8xlarge");

    _defineProperty(this, "m5d.12xlarge", "m5d.12xlarge");

    _defineProperty(this, "m5d.16xlarge", "m5d.16xlarge");

    _defineProperty(this, "m5d.24xlarge", "m5d.24xlarge");

    _defineProperty(this, "m5d.metal", "m5d.metal");

    _defineProperty(this, "m5ad.large", "m5ad.large");

    _defineProperty(this, "m5ad.xlarge", "m5ad.xlarge");

    _defineProperty(this, "m5ad.2xlarge", "m5ad.2xlarge");

    _defineProperty(this, "m5ad.4xlarge", "m5ad.4xlarge");

    _defineProperty(this, "m5ad.8xlarge", "m5ad.8xlarge");

    _defineProperty(this, "m5ad.12xlarge", "m5ad.12xlarge");

    _defineProperty(this, "m5ad.16xlarge", "m5ad.16xlarge");

    _defineProperty(this, "m5ad.24xlarge", "m5ad.24xlarge");

    _defineProperty(this, "h1.2xlarge", "h1.2xlarge");

    _defineProperty(this, "h1.4xlarge", "h1.4xlarge");

    _defineProperty(this, "h1.8xlarge", "h1.8xlarge");

    _defineProperty(this, "h1.16xlarge", "h1.16xlarge");

    _defineProperty(this, "z1d.large", "z1d.large");

    _defineProperty(this, "z1d.xlarge", "z1d.xlarge");

    _defineProperty(this, "z1d.2xlarge", "z1d.2xlarge");

    _defineProperty(this, "z1d.3xlarge", "z1d.3xlarge");

    _defineProperty(this, "z1d.6xlarge", "z1d.6xlarge");

    _defineProperty(this, "z1d.12xlarge", "z1d.12xlarge");

    _defineProperty(this, "z1d.metal", "z1d.metal");

    _defineProperty(this, "u-6tb1.metal", "u-6tb1.metal");

    _defineProperty(this, "u-9tb1.metal", "u-9tb1.metal");

    _defineProperty(this, "u-12tb1.metal", "u-12tb1.metal");

    _defineProperty(this, "u-18tb1.metal", "u-18tb1.metal");

    _defineProperty(this, "u-24tb1.metal", "u-24tb1.metal");

    _defineProperty(this, "a1.medium", "a1.medium");

    _defineProperty(this, "a1.large", "a1.large");

    _defineProperty(this, "a1.xlarge", "a1.xlarge");

    _defineProperty(this, "a1.2xlarge", "a1.2xlarge");

    _defineProperty(this, "a1.4xlarge", "a1.4xlarge");

    _defineProperty(this, "a1.metal", "a1.metal");

    _defineProperty(this, "m5dn.large", "m5dn.large");

    _defineProperty(this, "m5dn.xlarge", "m5dn.xlarge");

    _defineProperty(this, "m5dn.2xlarge", "m5dn.2xlarge");

    _defineProperty(this, "m5dn.4xlarge", "m5dn.4xlarge");

    _defineProperty(this, "m5dn.8xlarge", "m5dn.8xlarge");

    _defineProperty(this, "m5dn.12xlarge", "m5dn.12xlarge");

    _defineProperty(this, "m5dn.16xlarge", "m5dn.16xlarge");

    _defineProperty(this, "m5dn.24xlarge", "m5dn.24xlarge");

    _defineProperty(this, "m5n.large", "m5n.large");

    _defineProperty(this, "m5n.xlarge", "m5n.xlarge");

    _defineProperty(this, "m5n.2xlarge", "m5n.2xlarge");

    _defineProperty(this, "m5n.4xlarge", "m5n.4xlarge");

    _defineProperty(this, "m5n.8xlarge", "m5n.8xlarge");

    _defineProperty(this, "m5n.12xlarge", "m5n.12xlarge");

    _defineProperty(this, "m5n.16xlarge", "m5n.16xlarge");

    _defineProperty(this, "m5n.24xlarge", "m5n.24xlarge");

    _defineProperty(this, "r5dn.large", "r5dn.large");

    _defineProperty(this, "r5dn.xlarge", "r5dn.xlarge");

    _defineProperty(this, "r5dn.2xlarge", "r5dn.2xlarge");

    _defineProperty(this, "r5dn.4xlarge", "r5dn.4xlarge");

    _defineProperty(this, "r5dn.8xlarge", "r5dn.8xlarge");

    _defineProperty(this, "r5dn.12xlarge", "r5dn.12xlarge");

    _defineProperty(this, "r5dn.16xlarge", "r5dn.16xlarge");

    _defineProperty(this, "r5dn.24xlarge", "r5dn.24xlarge");

    _defineProperty(this, "r5n.large", "r5n.large");

    _defineProperty(this, "r5n.xlarge", "r5n.xlarge");

    _defineProperty(this, "r5n.2xlarge", "r5n.2xlarge");

    _defineProperty(this, "r5n.4xlarge", "r5n.4xlarge");

    _defineProperty(this, "r5n.8xlarge", "r5n.8xlarge");

    _defineProperty(this, "r5n.12xlarge", "r5n.12xlarge");

    _defineProperty(this, "r5n.16xlarge", "r5n.16xlarge");

    _defineProperty(this, "r5n.24xlarge", "r5n.24xlarge");

    _defineProperty(this, "inf1.xlarge", "inf1.xlarge");

    _defineProperty(this, "inf1.2xlarge", "inf1.2xlarge");

    _defineProperty(this, "inf1.6xlarge", "inf1.6xlarge");

    _defineProperty(this, "inf1.24xlarge", "inf1.24xlarge");
  }

  _createClass(InstanceType, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>InstanceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/InstanceType} The enum <code>InstanceType</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return InstanceType;
}();

exports["default"] = InstanceType;