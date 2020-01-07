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
 * The ImportKeyPairRequest model module.
 * @module model/ImportKeyPairRequest
 * @version 1.1.0
 */
var ImportKeyPairRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportKeyPairRequest</code>.
   * @alias module:model/ImportKeyPairRequest
   * @param keyName {String} 
   * @param publicKeyMaterial {String} 
   */
  function ImportKeyPairRequest(keyName, publicKeyMaterial) {
    _classCallCheck(this, ImportKeyPairRequest);

    ImportKeyPairRequest.initialize(this, keyName, publicKeyMaterial);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportKeyPairRequest, null, [{
    key: "initialize",
    value: function initialize(obj, keyName, publicKeyMaterial) {
      obj['KeyName'] = keyName;
      obj['PublicKeyMaterial'] = publicKeyMaterial;
    }
    /**
     * Constructs a <code>ImportKeyPairRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportKeyPairRequest} obj Optional instance to populate.
     * @return {module:model/ImportKeyPairRequest} The populated <code>ImportKeyPairRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportKeyPairRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('KeyName')) {
          obj['KeyName'] = _ApiClient["default"].convertToType(data['KeyName'], 'String');
        }

        if (data.hasOwnProperty('PublicKeyMaterial')) {
          obj['PublicKeyMaterial'] = _ApiClient["default"].convertToType(data['PublicKeyMaterial'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ImportKeyPairRequest;
}();
/**
 * @member {Boolean} DryRun
 */


ImportKeyPairRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} KeyName
 */

ImportKeyPairRequest.prototype['KeyName'] = undefined;
/**
 * @member {String} PublicKeyMaterial
 */

ImportKeyPairRequest.prototype['PublicKeyMaterial'] = undefined;
var _default = ImportKeyPairRequest;
exports["default"] = _default;