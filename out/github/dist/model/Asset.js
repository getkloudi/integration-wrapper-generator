"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Asset model module.
 * @module model/Asset
 * @version 1.4.5
 */
var Asset = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Asset</code>.
   * @alias module:model/Asset
   */
  function Asset() {
    _classCallCheck(this, Asset);

    Asset.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Asset, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Asset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Asset} obj Optional instance to populate.
     * @return {module:model/Asset} The populated <code>Asset</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Asset();

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('download_count')) {
          obj['download_count'] = _ApiClient["default"].convertToType(data['download_count'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('uploader')) {
          obj['uploader'] = _User["default"].constructFromObject(data['uploader']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Asset;
}();
/**
 * @member {String} content_type
 */


Asset.prototype['content_type'] = undefined;
/**
 * @member {String} created_at
 */

Asset.prototype['created_at'] = undefined;
/**
 * @member {Number} download_count
 */

Asset.prototype['download_count'] = undefined;
/**
 * @member {Number} id
 */

Asset.prototype['id'] = undefined;
/**
 * @member {String} label
 */

Asset.prototype['label'] = undefined;
/**
 * @member {String} name
 */

Asset.prototype['name'] = undefined;
/**
 * @member {Number} size
 */

Asset.prototype['size'] = undefined;
/**
 * @member {String} state
 */

Asset.prototype['state'] = undefined;
/**
 * @member {String} updated_at
 */

Asset.prototype['updated_at'] = undefined;
/**
 * @member {module:model/User} uploader
 */

Asset.prototype['uploader'] = undefined;
/**
 * @member {String} url
 */

Asset.prototype['url'] = undefined;
var _default = Asset;
exports["default"] = _default;