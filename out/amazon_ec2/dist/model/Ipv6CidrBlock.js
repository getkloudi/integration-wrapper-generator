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
 * The Ipv6CidrBlock model module.
 * @module model/Ipv6CidrBlock
 * @version 1.1.0
 */
var Ipv6CidrBlock =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Ipv6CidrBlock</code>.
   * Describes an IPv6 CIDR block.
   * @alias module:model/Ipv6CidrBlock
   */
  function Ipv6CidrBlock() {
    _classCallCheck(this, Ipv6CidrBlock);

    Ipv6CidrBlock.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Ipv6CidrBlock, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Ipv6CidrBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Ipv6CidrBlock} obj Optional instance to populate.
     * @return {module:model/Ipv6CidrBlock} The populated <code>Ipv6CidrBlock</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Ipv6CidrBlock();

        if (data.hasOwnProperty('Ipv6CidrBlock')) {
          obj['Ipv6CidrBlock'] = _ApiClient["default"].convertToType(data['Ipv6CidrBlock'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Ipv6CidrBlock;
}();
/**
 * @member {String} Ipv6CidrBlock
 */


Ipv6CidrBlock.prototype['Ipv6CidrBlock'] = undefined;
var _default = Ipv6CidrBlock;
exports["default"] = _default;