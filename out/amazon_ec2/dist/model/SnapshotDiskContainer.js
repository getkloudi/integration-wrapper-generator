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
 * The SnapshotDiskContainer model module.
 * @module model/SnapshotDiskContainer
 * @version 1.0.0
 */
var SnapshotDiskContainer =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SnapshotDiskContainer</code>.
   * The disk container object for the import snapshot request.
   * @alias module:model/SnapshotDiskContainer
   */
  function SnapshotDiskContainer() {
    _classCallCheck(this, SnapshotDiskContainer);

    SnapshotDiskContainer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SnapshotDiskContainer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SnapshotDiskContainer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnapshotDiskContainer} obj Optional instance to populate.
     * @return {module:model/SnapshotDiskContainer} The populated <code>SnapshotDiskContainer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SnapshotDiskContainer();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Format')) {
          obj['Format'] = _ApiClient["default"].convertToType(data['Format'], 'String');
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

  return SnapshotDiskContainer;
}();
/**
 * @member {String} Description
 */


SnapshotDiskContainer.prototype['Description'] = undefined;
/**
 * @member {String} Format
 */

SnapshotDiskContainer.prototype['Format'] = undefined;
/**
 * @member {String} Url
 */

SnapshotDiskContainer.prototype['Url'] = undefined;
/**
 * @member {module:model/UserBucket} UserBucket
 */

SnapshotDiskContainer.prototype['UserBucket'] = undefined;
var _default = SnapshotDiskContainer;
exports["default"] = _default;