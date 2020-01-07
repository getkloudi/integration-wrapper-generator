"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EbsEncryptionSupport = _interopRequireDefault(require("./EbsEncryptionSupport"));

var _EbsOptimizedSupport = _interopRequireDefault(require("./EbsOptimizedSupport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EbsInfo model module.
 * @module model/EbsInfo
 * @version 1.1.0
 */
var EbsInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EbsInfo</code>.
   * Describes the Amazon EBS features supported by the instance type.
   * @alias module:model/EbsInfo
   */
  function EbsInfo() {
    _classCallCheck(this, EbsInfo);

    EbsInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EbsInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EbsInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EbsInfo} obj Optional instance to populate.
     * @return {module:model/EbsInfo} The populated <code>EbsInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EbsInfo();

        if (data.hasOwnProperty('EbsOptimizedSupport')) {
          obj['EbsOptimizedSupport'] = _EbsOptimizedSupport["default"].constructFromObject(data['EbsOptimizedSupport']);
        }

        if (data.hasOwnProperty('EncryptionSupport')) {
          obj['EncryptionSupport'] = _EbsEncryptionSupport["default"].constructFromObject(data['EncryptionSupport']);
        }
      }

      return obj;
    }
  }]);

  return EbsInfo;
}();
/**
 * @member {module:model/EbsOptimizedSupport} EbsOptimizedSupport
 */


EbsInfo.prototype['EbsOptimizedSupport'] = undefined;
/**
 * @member {module:model/EbsEncryptionSupport} EncryptionSupport
 */

EbsInfo.prototype['EncryptionSupport'] = undefined;
var _default = EbsInfo;
exports["default"] = _default;