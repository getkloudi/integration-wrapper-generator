"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserBucket = _interopRequireDefault(require("./UserBucket"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ImageDiskContainer model module.
 * @module model/ImageDiskContainer
 * @version 1.1.0
 */
var ImageDiskContainer =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImageDiskContainer</code>.
   * Describes the disk container object for an import image task.
   * @alias module:model/ImageDiskContainer
   */
  function ImageDiskContainer() {
    _classCallCheck(this, ImageDiskContainer);

    ImageDiskContainer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImageDiskContainer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImageDiskContainer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageDiskContainer} obj Optional instance to populate.
     * @return {module:model/ImageDiskContainer} The populated <code>ImageDiskContainer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImageDiskContainer();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DeviceName')) {
          obj['DeviceName'] = _ApiClient["default"].convertToType(data['DeviceName'], 'String');
        }

        if (data.hasOwnProperty('Format')) {
          obj['Format'] = _ApiClient["default"].convertToType(data['Format'], 'String');
        }

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }

        if (data.hasOwnProperty('Url')) {
          obj['Url'] = _ApiClient["default"].convertToType(data['Url'], 'String');
        }

        if (data.hasOwnProperty('UserBucket')) {
          obj['UserBucket'] = _UserBucket["default"].constructFromObject(data['UserBucket']);
        }
      }

      return obj;
    }
  }]);

  return ImageDiskContainer;
}();
/**
 * @member {String} Description
 */


ImageDiskContainer.prototype['Description'] = undefined;
/**
 * @member {String} DeviceName
 */

ImageDiskContainer.prototype['DeviceName'] = undefined;
/**
 * @member {String} Format
 */

ImageDiskContainer.prototype['Format'] = undefined;
/**
 * @member {String} SnapshotId
 */

ImageDiskContainer.prototype['SnapshotId'] = undefined;
/**
 * @member {String} Url
 */

ImageDiskContainer.prototype['Url'] = undefined;
/**
 * @member {module:model/UserBucket} UserBucket
 */

ImageDiskContainer.prototype['UserBucket'] = undefined;
var _default = ImageDiskContainer;
exports["default"] = _default;