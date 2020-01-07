"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventCode = _interopRequireDefault(require("./EventCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceStatusEvent model module.
 * @module model/InstanceStatusEvent
 * @version 1.1.0
 */
var InstanceStatusEvent =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceStatusEvent</code>.
   * Describes a scheduled event for an instance.
   * @alias module:model/InstanceStatusEvent
   */
  function InstanceStatusEvent() {
    _classCallCheck(this, InstanceStatusEvent);

    InstanceStatusEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceStatusEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceStatusEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceStatusEvent} obj Optional instance to populate.
     * @return {module:model/InstanceStatusEvent} The populated <code>InstanceStatusEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceStatusEvent();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _EventCode["default"].constructFromObject(data['Code']);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('InstanceEventId')) {
          obj['InstanceEventId'] = _ApiClient["default"].convertToType(data['InstanceEventId'], 'String');
        }

        if (data.hasOwnProperty('NotAfter')) {
          obj['NotAfter'] = _ApiClient["default"].convertToType(data['NotAfter'], 'Date');
        }

        if (data.hasOwnProperty('NotBefore')) {
          obj['NotBefore'] = _ApiClient["default"].convertToType(data['NotBefore'], 'Date');
        }

        if (data.hasOwnProperty('NotBeforeDeadline')) {
          obj['NotBeforeDeadline'] = _ApiClient["default"].convertToType(data['NotBeforeDeadline'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return InstanceStatusEvent;
}();
/**
 * @member {module:model/EventCode} Code
 */


InstanceStatusEvent.prototype['Code'] = undefined;
/**
 * @member {String} Description
 */

InstanceStatusEvent.prototype['Description'] = undefined;
/**
 * @member {String} InstanceEventId
 */

InstanceStatusEvent.prototype['InstanceEventId'] = undefined;
/**
 * @member {Date} NotAfter
 */

InstanceStatusEvent.prototype['NotAfter'] = undefined;
/**
 * @member {Date} NotBefore
 */

InstanceStatusEvent.prototype['NotBefore'] = undefined;
/**
 * @member {Date} NotBeforeDeadline
 */

InstanceStatusEvent.prototype['NotBeforeDeadline'] = undefined;
var _default = InstanceStatusEvent;
exports["default"] = _default;