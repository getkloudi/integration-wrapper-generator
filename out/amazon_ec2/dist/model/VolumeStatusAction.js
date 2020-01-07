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
 * The VolumeStatusAction model module.
 * @module model/VolumeStatusAction
 * @version 1.1.0
 */
var VolumeStatusAction =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VolumeStatusAction</code>.
   * Describes a volume status operation code.
   * @alias module:model/VolumeStatusAction
   */
  function VolumeStatusAction() {
    _classCallCheck(this, VolumeStatusAction);

    VolumeStatusAction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VolumeStatusAction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VolumeStatusAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeStatusAction} obj Optional instance to populate.
     * @return {module:model/VolumeStatusAction} The populated <code>VolumeStatusAction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VolumeStatusAction();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _ApiClient["default"].convertToType(data['Code'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('EventId')) {
          obj['EventId'] = _ApiClient["default"].convertToType(data['EventId'], 'String');
        }

        if (data.hasOwnProperty('EventType')) {
          obj['EventType'] = _ApiClient["default"].convertToType(data['EventType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VolumeStatusAction;
}();
/**
 * @member {String} Code
 */


VolumeStatusAction.prototype['Code'] = undefined;
/**
 * @member {String} Description
 */

VolumeStatusAction.prototype['Description'] = undefined;
/**
 * @member {String} EventId
 */

VolumeStatusAction.prototype['EventId'] = undefined;
/**
 * @member {String} EventType
 */

VolumeStatusAction.prototype['EventType'] = undefined;
var _default = VolumeStatusAction;
exports["default"] = _default;