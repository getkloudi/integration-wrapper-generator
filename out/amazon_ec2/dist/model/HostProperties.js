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

/**
 * The HostProperties model module.
 * @module model/HostProperties
 * @version 1.1.0
 */
var HostProperties =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>HostProperties</code>.
   * Describes the properties of a Dedicated Host.
   * @alias module:model/HostProperties
   */
  function HostProperties() {
    _classCallCheck(this, HostProperties);

    HostProperties.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HostProperties, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HostProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HostProperties} obj Optional instance to populate.
     * @return {module:model/HostProperties} The populated <code>HostProperties</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HostProperties();

        if (data.hasOwnProperty('Cores')) {
          obj['Cores'] = _ApiClient["default"].convertToType(data['Cores'], 'Number');
        }

        if (data.hasOwnProperty('InstanceFamily')) {
          obj['InstanceFamily'] = _ApiClient["default"].convertToType(data['InstanceFamily'], 'String');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _ApiClient["default"].convertToType(data['InstanceType'], 'String');
        }

        if (data.hasOwnProperty('Sockets')) {
          obj['Sockets'] = _ApiClient["default"].convertToType(data['Sockets'], 'Number');
        }

        if (data.hasOwnProperty('TotalVCpus')) {
          obj['TotalVCpus'] = _ApiClient["default"].convertToType(data['TotalVCpus'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return HostProperties;
}();
/**
 * @member {Number} Cores
 */


HostProperties.prototype['Cores'] = undefined;
/**
 * @member {String} InstanceFamily
 */

HostProperties.prototype['InstanceFamily'] = undefined;
/**
 * @member {String} InstanceType
 */

HostProperties.prototype['InstanceType'] = undefined;
/**
 * @member {Number} Sockets
 */

HostProperties.prototype['Sockets'] = undefined;
/**
 * @member {Number} TotalVCpus
 */

HostProperties.prototype['TotalVCpus'] = undefined;
var _default = HostProperties;
exports["default"] = _default;