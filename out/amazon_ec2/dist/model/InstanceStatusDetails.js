"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StatusName = _interopRequireDefault(require("./StatusName"));

var _StatusType = _interopRequireDefault(require("./StatusType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceStatusDetails model module.
 * @module model/InstanceStatusDetails
 * @version 1.1.0
 */
var InstanceStatusDetails =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceStatusDetails</code>.
   * Describes the instance status.
   * @alias module:model/InstanceStatusDetails
   */
  function InstanceStatusDetails() {
    _classCallCheck(this, InstanceStatusDetails);

    InstanceStatusDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceStatusDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceStatusDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceStatusDetails} obj Optional instance to populate.
     * @return {module:model/InstanceStatusDetails} The populated <code>InstanceStatusDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceStatusDetails();

        if (data.hasOwnProperty('ImpairedSince')) {
          obj['ImpairedSince'] = _ApiClient["default"].convertToType(data['ImpairedSince'], 'Date');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _StatusName["default"].constructFromObject(data['Name']);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _StatusType["default"].constructFromObject(data['Status']);
        }
      }

      return obj;
    }
  }]);

  return InstanceStatusDetails;
}();
/**
 * @member {Date} ImpairedSince
 */


InstanceStatusDetails.prototype['ImpairedSince'] = undefined;
/**
 * @member {module:model/StatusName} Name
 */

InstanceStatusDetails.prototype['Name'] = undefined;
/**
 * @member {module:model/StatusType} Status
 */

InstanceStatusDetails.prototype['Status'] = undefined;
var _default = InstanceStatusDetails;
exports["default"] = _default;