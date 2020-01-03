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
* Enum class ResourceType.
* @enum {}
* @readonly
*/
var ResourceType =
/*#__PURE__*/
function () {
  function ResourceType() {
    _classCallCheck(this, ResourceType);

    _defineProperty(this, "client-vpn-endpoint", "client-vpn-endpoint");

    _defineProperty(this, "customer-gateway", "customer-gateway");

    _defineProperty(this, "dedicated-host", "dedicated-host");

    _defineProperty(this, "dhcp-options", "dhcp-options");

    _defineProperty(this, "elastic-ip", "elastic-ip");

    _defineProperty(this, "fleet", "fleet");

    _defineProperty(this, "fpga-image", "fpga-image");

    _defineProperty(this, "host-reservation", "host-reservation");

    _defineProperty(this, "image", "image");

    _defineProperty(this, "instance", "instance");

    _defineProperty(this, "internet-gateway", "internet-gateway");

    _defineProperty(this, "key-pair", "key-pair");

    _defineProperty(this, "launch-template", "launch-template");

    _defineProperty(this, "natgateway", "natgateway");

    _defineProperty(this, "network-acl", "network-acl");

    _defineProperty(this, "network-interface", "network-interface");

    _defineProperty(this, "placement-group", "placement-group");

    _defineProperty(this, "reserved-instances", "reserved-instances");

    _defineProperty(this, "route-table", "route-table");

    _defineProperty(this, "security-group", "security-group");

    _defineProperty(this, "snapshot", "snapshot");

    _defineProperty(this, "spot-fleet-request", "spot-fleet-request");

    _defineProperty(this, "spot-instances-request", "spot-instances-request");

    _defineProperty(this, "subnet", "subnet");

    _defineProperty(this, "traffic-mirror-filter", "traffic-mirror-filter");

    _defineProperty(this, "traffic-mirror-session", "traffic-mirror-session");

    _defineProperty(this, "traffic-mirror-target", "traffic-mirror-target");

    _defineProperty(this, "transit-gateway", "transit-gateway");

    _defineProperty(this, "transit-gateway-attachment", "transit-gateway-attachment");

    _defineProperty(this, "transit-gateway-multicast-domain", "transit-gateway-multicast-domain");

    _defineProperty(this, "transit-gateway-route-table", "transit-gateway-route-table");

    _defineProperty(this, "volume", "volume");

    _defineProperty(this, "vpc", "vpc");

    _defineProperty(this, "vpc-peering-connection", "vpc-peering-connection");

    _defineProperty(this, "vpn-connection", "vpn-connection");

    _defineProperty(this, "vpn-gateway", "vpn-gateway");
  }

  _createClass(ResourceType, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>ResourceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ResourceType} The enum <code>ResourceType</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return ResourceType;
}();

exports["default"] = ResourceType;