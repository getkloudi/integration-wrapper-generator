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
 * The ResetEbsDefaultKmsKeyIdResult model module.
 * @module model/ResetEbsDefaultKmsKeyIdResult
 * @version 1.1.0
 */
var ResetEbsDefaultKmsKeyIdResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ResetEbsDefaultKmsKeyIdResult</code>.
   * @alias module:model/ResetEbsDefaultKmsKeyIdResult
   */
  function ResetEbsDefaultKmsKeyIdResult() {
    _classCallCheck(this, ResetEbsDefaultKmsKeyIdResult);

    ResetEbsDefaultKmsKeyIdResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResetEbsDefaultKmsKeyIdResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ResetEbsDefaultKmsKeyIdResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResetEbsDefaultKmsKeyIdResult} obj Optional instance to populate.
     * @return {module:model/ResetEbsDefaultKmsKeyIdResult} The populated <code>ResetEbsDefaultKmsKeyIdResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResetEbsDefaultKmsKeyIdResult();

        if (data.hasOwnProperty('KmsKeyId')) {
          obj['KmsKeyId'] = _ApiClient["default"].convertToType(data['KmsKeyId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ResetEbsDefaultKmsKeyIdResult;
}();
/**
 * @member {String} KmsKeyId
 */


ResetEbsDefaultKmsKeyIdResult.prototype['KmsKeyId'] = undefined;
var _default = ResetEbsDefaultKmsKeyIdResult;
exports["default"] = _default;