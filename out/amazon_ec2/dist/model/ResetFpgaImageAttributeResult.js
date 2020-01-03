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
 * The ResetFpgaImageAttributeResult model module.
 * @module model/ResetFpgaImageAttributeResult
 * @version 1.0.0
 */
var ResetFpgaImageAttributeResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ResetFpgaImageAttributeResult</code>.
   * @alias module:model/ResetFpgaImageAttributeResult
   */
  function ResetFpgaImageAttributeResult() {
    _classCallCheck(this, ResetFpgaImageAttributeResult);

    ResetFpgaImageAttributeResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResetFpgaImageAttributeResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ResetFpgaImageAttributeResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResetFpgaImageAttributeResult} obj Optional instance to populate.
     * @return {module:model/ResetFpgaImageAttributeResult} The populated <code>ResetFpgaImageAttributeResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResetFpgaImageAttributeResult();

        if (data.hasOwnProperty('Return')) {
          obj['Return'] = _ApiClient["default"].convertToType(data['Return'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ResetFpgaImageAttributeResult;
}();
/**
 * @member {Boolean} Return
 */


ResetFpgaImageAttributeResult.prototype['Return'] = undefined;
var _default = ResetFpgaImageAttributeResult;
exports["default"] = _default;