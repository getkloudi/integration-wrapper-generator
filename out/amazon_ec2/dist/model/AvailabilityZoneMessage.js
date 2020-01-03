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
 * The AvailabilityZoneMessage model module.
 * @module model/AvailabilityZoneMessage
 * @version 1.0.0
 */
var AvailabilityZoneMessage =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AvailabilityZoneMessage</code>.
   * Describes a message about an Availability Zone or Local Zone.
   * @alias module:model/AvailabilityZoneMessage
   */
  function AvailabilityZoneMessage() {
    _classCallCheck(this, AvailabilityZoneMessage);

    AvailabilityZoneMessage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AvailabilityZoneMessage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AvailabilityZoneMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailabilityZoneMessage} obj Optional instance to populate.
     * @return {module:model/AvailabilityZoneMessage} The populated <code>AvailabilityZoneMessage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AvailabilityZoneMessage();

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AvailabilityZoneMessage;
}();
/**
 * @member {String} Message
 */


AvailabilityZoneMessage.prototype['Message'] = undefined;
var _default = AvailabilityZoneMessage;
exports["default"] = _default;