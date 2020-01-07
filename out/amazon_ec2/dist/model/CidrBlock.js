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
 * The CidrBlock model module.
 * @module model/CidrBlock
 * @version 1.1.0
 */
var CidrBlock =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CidrBlock</code>.
   * Describes an IPv4 CIDR block.
   * @alias module:model/CidrBlock
   */
  function CidrBlock() {
    _classCallCheck(this, CidrBlock);

    CidrBlock.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CidrBlock, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CidrBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CidrBlock} obj Optional instance to populate.
     * @return {module:model/CidrBlock} The populated <code>CidrBlock</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CidrBlock();

        if (data.hasOwnProperty('CidrBlock')) {
          obj['CidrBlock'] = _ApiClient["default"].convertToType(data['CidrBlock'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CidrBlock;
}();
/**
 * @member {String} CidrBlock
 */


CidrBlock.prototype['CidrBlock'] = undefined;
var _default = CidrBlock;
exports["default"] = _default;