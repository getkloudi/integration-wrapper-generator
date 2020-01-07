"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VolumeStatusDetails = _interopRequireDefault(require("./VolumeStatusDetails"));

var _VolumeStatusInfoStatus = _interopRequireDefault(require("./VolumeStatusInfoStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VolumeStatusInfo model module.
 * @module model/VolumeStatusInfo
 * @version 1.1.0
 */
var VolumeStatusInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VolumeStatusInfo</code>.
   * Describes the status of a volume.
   * @alias module:model/VolumeStatusInfo
   */
  function VolumeStatusInfo() {
    _classCallCheck(this, VolumeStatusInfo);

    VolumeStatusInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VolumeStatusInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VolumeStatusInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeStatusInfo} obj Optional instance to populate.
     * @return {module:model/VolumeStatusInfo} The populated <code>VolumeStatusInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VolumeStatusInfo();

        if (data.hasOwnProperty('Details')) {
          obj['Details'] = _ApiClient["default"].convertToType(data['Details'], [_VolumeStatusDetails["default"]]);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _VolumeStatusInfoStatus["default"].constructFromObject(data['Status']);
        }
      }

      return obj;
    }
  }]);

  return VolumeStatusInfo;
}();
/**
 * @member {Array.<module:model/VolumeStatusDetails>} Details
 */


VolumeStatusInfo.prototype['Details'] = undefined;
/**
 * @member {module:model/VolumeStatusInfoStatus} Status
 */

VolumeStatusInfo.prototype['Status'] = undefined;
var _default = VolumeStatusInfo;
exports["default"] = _default;