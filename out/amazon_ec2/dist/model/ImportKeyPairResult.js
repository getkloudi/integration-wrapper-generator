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
 * The ImportKeyPairResult model module.
 * @module model/ImportKeyPairResult
 * @version 1.0.0
 */
var ImportKeyPairResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportKeyPairResult</code>.
   * @alias module:model/ImportKeyPairResult
   */
  function ImportKeyPairResult() {
    _classCallCheck(this, ImportKeyPairResult);

    ImportKeyPairResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportKeyPairResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImportKeyPairResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportKeyPairResult} obj Optional instance to populate.
     * @return {module:model/ImportKeyPairResult} The populated <code>ImportKeyPairResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportKeyPairResult();

        if (data.hasOwnProperty('KeyFingerprint')) {
          obj['KeyFingerprint'] = _ApiClient["default"].convertToType(data['KeyFingerprint'], 'String');
        }

        if (data.hasOwnProperty('KeyName')) {
          obj['KeyName'] = _ApiClient["default"].convertToType(data['KeyName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ImportKeyPairResult;
}();
/**
 * @member {String} KeyFingerprint
 */


ImportKeyPairResult.prototype['KeyFingerprint'] = undefined;
/**
 * @member {String} KeyName
 */

ImportKeyPairResult.prototype['KeyName'] = undefined;
var _default = ImportKeyPairResult;
exports["default"] = _default;