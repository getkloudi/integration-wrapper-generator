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
 * The DeleteKeyPairRequest model module.
 * @module model/DeleteKeyPairRequest
 * @version 1.0.0
 */
var DeleteKeyPairRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteKeyPairRequest</code>.
   * @alias module:model/DeleteKeyPairRequest
   * @param keyName {String} 
   */
  function DeleteKeyPairRequest(keyName) {
    _classCallCheck(this, DeleteKeyPairRequest);

    DeleteKeyPairRequest.initialize(this, keyName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteKeyPairRequest, null, [{
    key: "initialize",
    value: function initialize(obj, keyName) {
      obj['KeyName'] = keyName;
    }
    /**
     * Constructs a <code>DeleteKeyPairRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteKeyPairRequest} obj Optional instance to populate.
     * @return {module:model/DeleteKeyPairRequest} The populated <code>DeleteKeyPairRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteKeyPairRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('KeyName')) {
          obj['KeyName'] = _ApiClient["default"].convertToType(data['KeyName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteKeyPairRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteKeyPairRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} KeyName
 */

DeleteKeyPairRequest.prototype['KeyName'] = undefined;
var _default = DeleteKeyPairRequest;
exports["default"] = _default;