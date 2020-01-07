"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DiskInfo = _interopRequireDefault(require("./DiskInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceStorageInfo model module.
 * @module model/InstanceStorageInfo
 * @version 1.1.0
 */
var InstanceStorageInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceStorageInfo</code>.
   * Describes the disks that are available for the instance type.
   * @alias module:model/InstanceStorageInfo
   */
  function InstanceStorageInfo() {
    _classCallCheck(this, InstanceStorageInfo);

    InstanceStorageInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceStorageInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceStorageInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceStorageInfo} obj Optional instance to populate.
     * @return {module:model/InstanceStorageInfo} The populated <code>InstanceStorageInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceStorageInfo();

        if (data.hasOwnProperty('Disks')) {
          obj['Disks'] = _ApiClient["default"].convertToType(data['Disks'], [_DiskInfo["default"]]);
        }

        if (data.hasOwnProperty('TotalSizeInGB')) {
          obj['TotalSizeInGB'] = _ApiClient["default"].convertToType(data['TotalSizeInGB'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InstanceStorageInfo;
}();
/**
 * @member {Array.<module:model/DiskInfo>} Disks
 */


InstanceStorageInfo.prototype['Disks'] = undefined;
/**
 * @member {Number} TotalSizeInGB
 */

InstanceStorageInfo.prototype['TotalSizeInGB'] = undefined;
var _default = InstanceStorageInfo;
exports["default"] = _default;