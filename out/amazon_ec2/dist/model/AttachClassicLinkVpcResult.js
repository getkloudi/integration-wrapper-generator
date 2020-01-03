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
 * The AttachClassicLinkVpcResult model module.
 * @module model/AttachClassicLinkVpcResult
 * @version 1.0.0
 */
var AttachClassicLinkVpcResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AttachClassicLinkVpcResult</code>.
   * @alias module:model/AttachClassicLinkVpcResult
   */
  function AttachClassicLinkVpcResult() {
    _classCallCheck(this, AttachClassicLinkVpcResult);

    AttachClassicLinkVpcResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttachClassicLinkVpcResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AttachClassicLinkVpcResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachClassicLinkVpcResult} obj Optional instance to populate.
     * @return {module:model/AttachClassicLinkVpcResult} The populated <code>AttachClassicLinkVpcResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttachClassicLinkVpcResult();

        if (data.hasOwnProperty('Return')) {
          obj['Return'] = _ApiClient["default"].convertToType(data['Return'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return AttachClassicLinkVpcResult;
}();
/**
 * @member {Boolean} Return
 */


AttachClassicLinkVpcResult.prototype['Return'] = undefined;
var _default = AttachClassicLinkVpcResult;
exports["default"] = _default;