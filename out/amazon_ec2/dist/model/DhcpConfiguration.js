"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeValue = _interopRequireDefault(require("./AttributeValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DhcpConfiguration model module.
 * @module model/DhcpConfiguration
 * @version 1.0.0
 */
var DhcpConfiguration =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DhcpConfiguration</code>.
   * Describes a DHCP configuration option.
   * @alias module:model/DhcpConfiguration
   */
  function DhcpConfiguration() {
    _classCallCheck(this, DhcpConfiguration);

    DhcpConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DhcpConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DhcpConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DhcpConfiguration} obj Optional instance to populate.
     * @return {module:model/DhcpConfiguration} The populated <code>DhcpConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DhcpConfiguration();

        if (data.hasOwnProperty('Key')) {
          obj['Key'] = _ApiClient["default"].convertToType(data['Key'], 'String');
        }

        if (data.hasOwnProperty('Values')) {
          obj['Values'] = _ApiClient["default"].convertToType(data['Values'], [_AttributeValue["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DhcpConfiguration;
}();
/**
 * @member {String} Key
 */


DhcpConfiguration.prototype['Key'] = undefined;
/**
 * @member {Array.<module:model/AttributeValue>} Values
 */

DhcpConfiguration.prototype['Values'] = undefined;
var _default = DhcpConfiguration;
exports["default"] = _default;