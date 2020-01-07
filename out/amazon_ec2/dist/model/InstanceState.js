"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceStateName = _interopRequireDefault(require("./InstanceStateName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceState model module.
 * @module model/InstanceState
 * @version 1.1.0
 */
var InstanceState =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceState</code>.
   * Describes the current state of an instance.
   * @alias module:model/InstanceState
   */
  function InstanceState() {
    _classCallCheck(this, InstanceState);

    InstanceState.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceState, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceState} obj Optional instance to populate.
     * @return {module:model/InstanceState} The populated <code>InstanceState</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceState();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _ApiClient["default"].convertToType(data['Code'], 'Number');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _InstanceStateName["default"].constructFromObject(data['Name']);
        }
      }

      return obj;
    }
  }]);

  return InstanceState;
}();
/**
 * @member {Number} Code
 */


InstanceState.prototype['Code'] = undefined;
/**
 * @member {module:model/InstanceStateName} Name
 */

InstanceState.prototype['Name'] = undefined;
var _default = InstanceState;
exports["default"] = _default;