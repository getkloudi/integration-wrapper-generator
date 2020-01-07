"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DhcpConfiguration = _interopRequireDefault(require("./DhcpConfiguration"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DhcpOptions model module.
 * @module model/DhcpOptions
 * @version 1.1.0
 */
var DhcpOptions =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DhcpOptions</code>.
   * Describes a set of DHCP options.
   * @alias module:model/DhcpOptions
   */
  function DhcpOptions() {
    _classCallCheck(this, DhcpOptions);

    DhcpOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DhcpOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DhcpOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DhcpOptions} obj Optional instance to populate.
     * @return {module:model/DhcpOptions} The populated <code>DhcpOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DhcpOptions();

        if (data.hasOwnProperty('DhcpConfigurations')) {
          obj['DhcpConfigurations'] = _ApiClient["default"].convertToType(data['DhcpConfigurations'], [_DhcpConfiguration["default"]]);
        }

        if (data.hasOwnProperty('DhcpOptionsId')) {
          obj['DhcpOptionsId'] = _ApiClient["default"].convertToType(data['DhcpOptionsId'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DhcpOptions;
}();
/**
 * @member {Array.<module:model/DhcpConfiguration>} DhcpConfigurations
 */


DhcpOptions.prototype['DhcpConfigurations'] = undefined;
/**
 * @member {String} DhcpOptionsId
 */

DhcpOptions.prototype['DhcpOptionsId'] = undefined;
/**
 * @member {String} OwnerId
 */

DhcpOptions.prototype['OwnerId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

DhcpOptions.prototype['Tags'] = undefined;
var _default = DhcpOptions;
exports["default"] = _default;