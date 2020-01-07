"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StorageLocation = _interopRequireDefault(require("./StorageLocation"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateFpgaImageRequest model module.
 * @module model/CreateFpgaImageRequest
 * @version 1.1.0
 */
var CreateFpgaImageRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateFpgaImageRequest</code>.
   * @alias module:model/CreateFpgaImageRequest
   * @param inputStorageLocation {module:model/StorageLocation} 
   */
  function CreateFpgaImageRequest(inputStorageLocation) {
    _classCallCheck(this, CreateFpgaImageRequest);

    CreateFpgaImageRequest.initialize(this, inputStorageLocation);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFpgaImageRequest, null, [{
    key: "initialize",
    value: function initialize(obj, inputStorageLocation) {
      obj['InputStorageLocation'] = inputStorageLocation;
    }
    /**
     * Constructs a <code>CreateFpgaImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFpgaImageRequest} obj Optional instance to populate.
     * @return {module:model/CreateFpgaImageRequest} The populated <code>CreateFpgaImageRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFpgaImageRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InputStorageLocation')) {
          obj['InputStorageLocation'] = _StorageLocation["default"].constructFromObject(data['InputStorageLocation']);
        }

        if (data.hasOwnProperty('LogsStorageLocation')) {
          obj['LogsStorageLocation'] = _StorageLocation["default"].constructFromObject(data['LogsStorageLocation']);
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreateFpgaImageRequest;
}();
/**
 * @member {String} ClientToken
 */


CreateFpgaImageRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} Description
 */

CreateFpgaImageRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateFpgaImageRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/StorageLocation} InputStorageLocation
 */

CreateFpgaImageRequest.prototype['InputStorageLocation'] = undefined;
/**
 * @member {module:model/StorageLocation} LogsStorageLocation
 */

CreateFpgaImageRequest.prototype['LogsStorageLocation'] = undefined;
/**
 * @member {String} Name
 */

CreateFpgaImageRequest.prototype['Name'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateFpgaImageRequest.prototype['TagSpecifications'] = undefined;
var _default = CreateFpgaImageRequest;
exports["default"] = _default;