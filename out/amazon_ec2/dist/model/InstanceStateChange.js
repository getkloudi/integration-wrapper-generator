"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceState = _interopRequireDefault(require("./InstanceState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceStateChange model module.
 * @module model/InstanceStateChange
 * @version 1.1.0
 */
var InstanceStateChange =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceStateChange</code>.
   * Describes an instance state change.
   * @alias module:model/InstanceStateChange
   */
  function InstanceStateChange() {
    _classCallCheck(this, InstanceStateChange);

    InstanceStateChange.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceStateChange, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceStateChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceStateChange} obj Optional instance to populate.
     * @return {module:model/InstanceStateChange} The populated <code>InstanceStateChange</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceStateChange();

        if (data.hasOwnProperty('CurrentState')) {
          obj['CurrentState'] = _InstanceState["default"].constructFromObject(data['CurrentState']);
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('PreviousState')) {
          obj['PreviousState'] = _InstanceState["default"].constructFromObject(data['PreviousState']);
        }
      }

      return obj;
    }
  }]);

  return InstanceStateChange;
}();
/**
 * @member {module:model/InstanceState} CurrentState
 */


InstanceStateChange.prototype['CurrentState'] = undefined;
/**
 * @member {String} InstanceId
 */

InstanceStateChange.prototype['InstanceId'] = undefined;
/**
 * @member {module:model/InstanceState} PreviousState
 */

InstanceStateChange.prototype['PreviousState'] = undefined;
var _default = InstanceStateChange;
exports["default"] = _default;