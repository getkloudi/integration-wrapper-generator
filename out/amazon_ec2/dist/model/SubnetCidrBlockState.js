"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SubnetCidrBlockStateCode = _interopRequireDefault(require("./SubnetCidrBlockStateCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SubnetCidrBlockState model module.
 * @module model/SubnetCidrBlockState
 * @version 1.0.0
 */
var SubnetCidrBlockState =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SubnetCidrBlockState</code>.
   * Describes the state of a CIDR block.
   * @alias module:model/SubnetCidrBlockState
   */
  function SubnetCidrBlockState() {
    _classCallCheck(this, SubnetCidrBlockState);

    SubnetCidrBlockState.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SubnetCidrBlockState, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SubnetCidrBlockState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubnetCidrBlockState} obj Optional instance to populate.
     * @return {module:model/SubnetCidrBlockState} The populated <code>SubnetCidrBlockState</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubnetCidrBlockState();

        if (data.hasOwnProperty('State')) {
          obj['State'] = _SubnetCidrBlockStateCode["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SubnetCidrBlockState;
}();
/**
 * @member {module:model/SubnetCidrBlockStateCode} State
 */


SubnetCidrBlockState.prototype['State'] = undefined;
/**
 * @member {String} StatusMessage
 */

SubnetCidrBlockState.prototype['StatusMessage'] = undefined;
var _default = SubnetCidrBlockState;
exports["default"] = _default;