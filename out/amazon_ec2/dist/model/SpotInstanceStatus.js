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
 * The SpotInstanceStatus model module.
 * @module model/SpotInstanceStatus
 * @version 1.0.0
 */
var SpotInstanceStatus =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SpotInstanceStatus</code>.
   * Describes the status of a Spot Instance request.
   * @alias module:model/SpotInstanceStatus
   */
  function SpotInstanceStatus() {
    _classCallCheck(this, SpotInstanceStatus);

    SpotInstanceStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpotInstanceStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SpotInstanceStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotInstanceStatus} obj Optional instance to populate.
     * @return {module:model/SpotInstanceStatus} The populated <code>SpotInstanceStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpotInstanceStatus();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _ApiClient["default"].convertToType(data['Code'], 'String');
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }

        if (data.hasOwnProperty('UpdateTime')) {
          obj['UpdateTime'] = _ApiClient["default"].convertToType(data['UpdateTime'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return SpotInstanceStatus;
}();
/**
 * @member {String} Code
 */


SpotInstanceStatus.prototype['Code'] = undefined;
/**
 * @member {String} Message
 */

SpotInstanceStatus.prototype['Message'] = undefined;
/**
 * @member {Date} UpdateTime
 */

SpotInstanceStatus.prototype['UpdateTime'] = undefined;
var _default = SpotInstanceStatus;
exports["default"] = _default;