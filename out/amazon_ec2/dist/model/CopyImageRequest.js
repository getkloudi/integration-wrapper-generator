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
 * The CopyImageRequest model module.
 * @module model/CopyImageRequest
 * @version 1.0.0
 */
var CopyImageRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CopyImageRequest</code>.
   * Contains the parameters for CopyImage.
   * @alias module:model/CopyImageRequest
   * @param name {String} 
   * @param sourceImageId {String} 
   * @param sourceRegion {String} 
   */
  function CopyImageRequest(name, sourceImageId, sourceRegion) {
    _classCallCheck(this, CopyImageRequest);

    CopyImageRequest.initialize(this, name, sourceImageId, sourceRegion);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CopyImageRequest, null, [{
    key: "initialize",
    value: function initialize(obj, name, sourceImageId, sourceRegion) {
      obj['Name'] = name;
      obj['SourceImageId'] = sourceImageId;
      obj['SourceRegion'] = sourceRegion;
    }
    /**
     * Constructs a <code>CopyImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CopyImageRequest} obj Optional instance to populate.
     * @return {module:model/CopyImageRequest} The populated <code>CopyImageRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CopyImageRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Encrypted')) {
          obj['Encrypted'] = _ApiClient["default"].convertToType(data['Encrypted'], 'Boolean');
        }

        if (data.hasOwnProperty('KmsKeyId')) {
          obj['KmsKeyId'] = _ApiClient["default"].convertToType(data['KmsKeyId'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('SourceImageId')) {
          obj['SourceImageId'] = _ApiClient["default"].convertToType(data['SourceImageId'], 'String');
        }

        if (data.hasOwnProperty('SourceRegion')) {
          obj['SourceRegion'] = _ApiClient["default"].convertToType(data['SourceRegion'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CopyImageRequest;
}();
/**
 * @member {String} ClientToken
 */


CopyImageRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} Description
 */

CopyImageRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CopyImageRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} Encrypted
 */

CopyImageRequest.prototype['Encrypted'] = undefined;
/**
 * @member {String} KmsKeyId
 */

CopyImageRequest.prototype['KmsKeyId'] = undefined;
/**
 * @member {String} Name
 */

CopyImageRequest.prototype['Name'] = undefined;
/**
 * @member {String} SourceImageId
 */

CopyImageRequest.prototype['SourceImageId'] = undefined;
/**
 * @member {String} SourceRegion
 */

CopyImageRequest.prototype['SourceRegion'] = undefined;
var _default = CopyImageRequest;
exports["default"] = _default;