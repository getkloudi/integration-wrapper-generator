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
 * The EventInformation model module.
 * @module model/EventInformation
 * @version 1.0.0
 */
var EventInformation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EventInformation</code>.
   * Describes an EC2 Fleet or Spot Fleet event.
   * @alias module:model/EventInformation
   */
  function EventInformation() {
    _classCallCheck(this, EventInformation);

    EventInformation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventInformation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EventInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventInformation} obj Optional instance to populate.
     * @return {module:model/EventInformation} The populated <code>EventInformation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventInformation();

        if (data.hasOwnProperty('EventDescription')) {
          obj['EventDescription'] = _ApiClient["default"].convertToType(data['EventDescription'], 'String');
        }

        if (data.hasOwnProperty('EventSubType')) {
          obj['EventSubType'] = _ApiClient["default"].convertToType(data['EventSubType'], 'String');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EventInformation;
}();
/**
 * @member {String} EventDescription
 */


EventInformation.prototype['EventDescription'] = undefined;
/**
 * @member {String} EventSubType
 */

EventInformation.prototype['EventSubType'] = undefined;
/**
 * @member {String} InstanceId
 */

EventInformation.prototype['InstanceId'] = undefined;
var _default = EventInformation;
exports["default"] = _default;