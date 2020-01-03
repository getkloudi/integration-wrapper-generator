"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MoveStatus = _interopRequireDefault(require("./MoveStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MovingAddressStatus model module.
 * @module model/MovingAddressStatus
 * @version 1.0.0
 */
var MovingAddressStatus =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>MovingAddressStatus</code>.
   * Describes the status of a moving Elastic IP address.
   * @alias module:model/MovingAddressStatus
   */
  function MovingAddressStatus() {
    _classCallCheck(this, MovingAddressStatus);

    MovingAddressStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MovingAddressStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MovingAddressStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MovingAddressStatus} obj Optional instance to populate.
     * @return {module:model/MovingAddressStatus} The populated <code>MovingAddressStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MovingAddressStatus();

        if (data.hasOwnProperty('MoveStatus')) {
          obj['MoveStatus'] = _MoveStatus["default"].constructFromObject(data['MoveStatus']);
        }

        if (data.hasOwnProperty('PublicIp')) {
          obj['PublicIp'] = _ApiClient["default"].convertToType(data['PublicIp'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MovingAddressStatus;
}();
/**
 * @member {module:model/MoveStatus} MoveStatus
 */


MovingAddressStatus.prototype['MoveStatus'] = undefined;
/**
 * @member {String} PublicIp
 */

MovingAddressStatus.prototype['PublicIp'] = undefined;
var _default = MovingAddressStatus;
exports["default"] = _default;