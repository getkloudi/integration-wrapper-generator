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
 * The PropagatingVgw model module.
 * @module model/PropagatingVgw
 * @version 1.0.0
 */
var PropagatingVgw =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PropagatingVgw</code>.
   * Describes a virtual private gateway propagating route.
   * @alias module:model/PropagatingVgw
   */
  function PropagatingVgw() {
    _classCallCheck(this, PropagatingVgw);

    PropagatingVgw.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PropagatingVgw, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PropagatingVgw</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropagatingVgw} obj Optional instance to populate.
     * @return {module:model/PropagatingVgw} The populated <code>PropagatingVgw</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PropagatingVgw();

        if (data.hasOwnProperty('GatewayId')) {
          obj['GatewayId'] = _ApiClient["default"].convertToType(data['GatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PropagatingVgw;
}();
/**
 * @member {String} GatewayId
 */


PropagatingVgw.prototype['GatewayId'] = undefined;
var _default = PropagatingVgw;
exports["default"] = _default;