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
 * The EnableEbsEncryptionByDefaultResult model module.
 * @module model/EnableEbsEncryptionByDefaultResult
 * @version 1.0.0
 */
var EnableEbsEncryptionByDefaultResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EnableEbsEncryptionByDefaultResult</code>.
   * @alias module:model/EnableEbsEncryptionByDefaultResult
   */
  function EnableEbsEncryptionByDefaultResult() {
    _classCallCheck(this, EnableEbsEncryptionByDefaultResult);

    EnableEbsEncryptionByDefaultResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnableEbsEncryptionByDefaultResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EnableEbsEncryptionByDefaultResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnableEbsEncryptionByDefaultResult} obj Optional instance to populate.
     * @return {module:model/EnableEbsEncryptionByDefaultResult} The populated <code>EnableEbsEncryptionByDefaultResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnableEbsEncryptionByDefaultResult();

        if (data.hasOwnProperty('EbsEncryptionByDefault')) {
          obj['EbsEncryptionByDefault'] = _ApiClient["default"].convertToType(data['EbsEncryptionByDefault'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EnableEbsEncryptionByDefaultResult;
}();
/**
 * @member {Boolean} EbsEncryptionByDefault
 */


EnableEbsEncryptionByDefaultResult.prototype['EbsEncryptionByDefault'] = undefined;
var _default = EnableEbsEncryptionByDefaultResult;
exports["default"] = _default;