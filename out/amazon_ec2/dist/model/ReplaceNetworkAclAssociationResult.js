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
 * The ReplaceNetworkAclAssociationResult model module.
 * @module model/ReplaceNetworkAclAssociationResult
 * @version 1.0.0
 */
var ReplaceNetworkAclAssociationResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReplaceNetworkAclAssociationResult</code>.
   * @alias module:model/ReplaceNetworkAclAssociationResult
   */
  function ReplaceNetworkAclAssociationResult() {
    _classCallCheck(this, ReplaceNetworkAclAssociationResult);

    ReplaceNetworkAclAssociationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReplaceNetworkAclAssociationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReplaceNetworkAclAssociationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReplaceNetworkAclAssociationResult} obj Optional instance to populate.
     * @return {module:model/ReplaceNetworkAclAssociationResult} The populated <code>ReplaceNetworkAclAssociationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReplaceNetworkAclAssociationResult();

        if (data.hasOwnProperty('NewAssociationId')) {
          obj['NewAssociationId'] = _ApiClient["default"].convertToType(data['NewAssociationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReplaceNetworkAclAssociationResult;
}();
/**
 * @member {String} NewAssociationId
 */


ReplaceNetworkAclAssociationResult.prototype['NewAssociationId'] = undefined;
var _default = ReplaceNetworkAclAssociationResult;
exports["default"] = _default;