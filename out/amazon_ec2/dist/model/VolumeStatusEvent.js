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
 * The VolumeStatusEvent model module.
 * @module model/VolumeStatusEvent
 * @version 1.1.0
 */
var VolumeStatusEvent =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VolumeStatusEvent</code>.
   * Describes a volume status event.
   * @alias module:model/VolumeStatusEvent
   */
  function VolumeStatusEvent() {
    _classCallCheck(this, VolumeStatusEvent);

    VolumeStatusEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VolumeStatusEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VolumeStatusEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeStatusEvent} obj Optional instance to populate.
     * @return {module:model/VolumeStatusEvent} The populated <code>VolumeStatusEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VolumeStatusEvent();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('EventId')) {
          obj['EventId'] = _ApiClient["default"].convertToType(data['EventId'], 'String');
        }

        if (data.hasOwnProperty('EventType')) {
          obj['EventType'] = _ApiClient["default"].convertToType(data['EventType'], 'String');
        }

        if (data.hasOwnProperty('NotAfter')) {
          obj['NotAfter'] = _ApiClient["default"].convertToType(data['NotAfter'], 'Date');
        }

        if (data.hasOwnProperty('NotBefore')) {
          obj['NotBefore'] = _ApiClient["default"].convertToType(data['NotBefore'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return VolumeStatusEvent;
}();
/**
 * @member {String} Description
 */


VolumeStatusEvent.prototype['Description'] = undefined;
/**
 * @member {String} EventId
 */

VolumeStatusEvent.prototype['EventId'] = undefined;
/**
 * @member {String} EventType
 */

VolumeStatusEvent.prototype['EventType'] = undefined;
/**
 * @member {Date} NotAfter
 */

VolumeStatusEvent.prototype['NotAfter'] = undefined;
/**
 * @member {Date} NotBefore
 */

VolumeStatusEvent.prototype['NotBefore'] = undefined;
var _default = VolumeStatusEvent;
exports["default"] = _default;