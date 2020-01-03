"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _S3Storage = _interopRequireDefault(require("./S3Storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Storage model module.
 * @module model/Storage
 * @version 1.0.0
 */
var Storage =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Storage</code>.
   * Describes the storage location for an instance store-backed AMI.
   * @alias module:model/Storage
   */
  function Storage() {
    _classCallCheck(this, Storage);

    Storage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Storage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Storage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Storage} obj Optional instance to populate.
     * @return {module:model/Storage} The populated <code>Storage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Storage();

        if (data.hasOwnProperty('S3')) {
          obj['S3'] = _S3Storage["default"].constructFromObject(data['S3']);
        }
      }

      return obj;
    }
  }]);

  return Storage;
}();
/**
 * @member {module:model/S3Storage} S3
 */


Storage.prototype['S3'] = undefined;
var _default = Storage;
exports["default"] = _default;