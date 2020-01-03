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
 * The ClientData model module.
 * @module model/ClientData
 * @version 1.0.0
 */
var ClientData =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ClientData</code>.
   * Describes the client-specific data.
   * @alias module:model/ClientData
   */
  function ClientData() {
    _classCallCheck(this, ClientData);

    ClientData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClientData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClientData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientData} obj Optional instance to populate.
     * @return {module:model/ClientData} The populated <code>ClientData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientData();

        if (data.hasOwnProperty('Comment')) {
          obj['Comment'] = _ApiClient["default"].convertToType(data['Comment'], 'String');
        }

        if (data.hasOwnProperty('UploadEnd')) {
          obj['UploadEnd'] = _ApiClient["default"].convertToType(data['UploadEnd'], 'Date');
        }

        if (data.hasOwnProperty('UploadSize')) {
          obj['UploadSize'] = _ApiClient["default"].convertToType(data['UploadSize'], 'Number');
        }

        if (data.hasOwnProperty('UploadStart')) {
          obj['UploadStart'] = _ApiClient["default"].convertToType(data['UploadStart'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return ClientData;
}();
/**
 * @member {String} Comment
 */


ClientData.prototype['Comment'] = undefined;
/**
 * @member {Date} UploadEnd
 */

ClientData.prototype['UploadEnd'] = undefined;
/**
 * @member {Number} UploadSize
 */

ClientData.prototype['UploadSize'] = undefined;
/**
 * @member {Date} UploadStart
 */

ClientData.prototype['UploadStart'] = undefined;
var _default = ClientData;
exports["default"] = _default;