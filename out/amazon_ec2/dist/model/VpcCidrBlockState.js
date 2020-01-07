"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpcCidrBlockStateCode = _interopRequireDefault(require("./VpcCidrBlockStateCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VpcCidrBlockState model module.
 * @module model/VpcCidrBlockState
 * @version 1.1.0
 */
var VpcCidrBlockState =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpcCidrBlockState</code>.
   * Describes the state of a CIDR block.
   * @alias module:model/VpcCidrBlockState
   */
  function VpcCidrBlockState() {
    _classCallCheck(this, VpcCidrBlockState);

    VpcCidrBlockState.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpcCidrBlockState, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpcCidrBlockState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpcCidrBlockState} obj Optional instance to populate.
     * @return {module:model/VpcCidrBlockState} The populated <code>VpcCidrBlockState</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpcCidrBlockState();

        if (data.hasOwnProperty('State')) {
          obj['State'] = _VpcCidrBlockStateCode["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VpcCidrBlockState;
}();
/**
 * @member {module:model/VpcCidrBlockStateCode} State
 */


VpcCidrBlockState.prototype['State'] = undefined;
/**
 * @member {String} StatusMessage
 */

VpcCidrBlockState.prototype['StatusMessage'] = undefined;
var _default = VpcCidrBlockState;
exports["default"] = _default;