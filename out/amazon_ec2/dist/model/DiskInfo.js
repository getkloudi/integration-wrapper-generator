"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DiskType = _interopRequireDefault(require("./DiskType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DiskInfo model module.
 * @module model/DiskInfo
 * @version 1.1.0
 */
var DiskInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DiskInfo</code>.
   * Describes the disk.
   * @alias module:model/DiskInfo
   */
  function DiskInfo() {
    _classCallCheck(this, DiskInfo);

    DiskInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DiskInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DiskInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiskInfo} obj Optional instance to populate.
     * @return {module:model/DiskInfo} The populated <code>DiskInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DiskInfo();

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }

        if (data.hasOwnProperty('SizeInGB')) {
          obj['SizeInGB'] = _ApiClient["default"].convertToType(data['SizeInGB'], 'Number');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _DiskType["default"].constructFromObject(data['Type']);
        }
      }

      return obj;
    }
  }]);

  return DiskInfo;
}();
/**
 * @member {Number} Count
 */


DiskInfo.prototype['Count'] = undefined;
/**
 * @member {Number} SizeInGB
 */

DiskInfo.prototype['SizeInGB'] = undefined;
/**
 * @member {module:model/DiskType} Type
 */

DiskInfo.prototype['Type'] = undefined;
var _default = DiskInfo;
exports["default"] = _default;