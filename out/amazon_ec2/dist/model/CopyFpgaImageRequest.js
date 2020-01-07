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
 * The CopyFpgaImageRequest model module.
 * @module model/CopyFpgaImageRequest
 * @version 1.1.0
 */
var CopyFpgaImageRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CopyFpgaImageRequest</code>.
   * @alias module:model/CopyFpgaImageRequest
   * @param sourceFpgaImageId {String} 
   * @param sourceRegion {String} 
   */
  function CopyFpgaImageRequest(sourceFpgaImageId, sourceRegion) {
    _classCallCheck(this, CopyFpgaImageRequest);

    CopyFpgaImageRequest.initialize(this, sourceFpgaImageId, sourceRegion);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CopyFpgaImageRequest, null, [{
    key: "initialize",
    value: function initialize(obj, sourceFpgaImageId, sourceRegion) {
      obj['SourceFpgaImageId'] = sourceFpgaImageId;
      obj['SourceRegion'] = sourceRegion;
    }
    /**
     * Constructs a <code>CopyFpgaImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CopyFpgaImageRequest} obj Optional instance to populate.
     * @return {module:model/CopyFpgaImageRequest} The populated <code>CopyFpgaImageRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CopyFpgaImageRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('SourceFpgaImageId')) {
          obj['SourceFpgaImageId'] = _ApiClient["default"].convertToType(data['SourceFpgaImageId'], 'String');
        }

        if (data.hasOwnProperty('SourceRegion')) {
          obj['SourceRegion'] = _ApiClient["default"].convertToType(data['SourceRegion'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CopyFpgaImageRequest;
}();
/**
 * @member {String} ClientToken
 */


CopyFpgaImageRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} Description
 */

CopyFpgaImageRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CopyFpgaImageRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} Name
 */

CopyFpgaImageRequest.prototype['Name'] = undefined;
/**
 * @member {String} SourceFpgaImageId
 */

CopyFpgaImageRequest.prototype['SourceFpgaImageId'] = undefined;
/**
 * @member {String} SourceRegion
 */

CopyFpgaImageRequest.prototype['SourceRegion'] = undefined;
var _default = CopyFpgaImageRequest;
exports["default"] = _default;