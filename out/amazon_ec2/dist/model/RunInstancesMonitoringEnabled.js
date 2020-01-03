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
 * The RunInstancesMonitoringEnabled model module.
 * @module model/RunInstancesMonitoringEnabled
 * @version 1.0.0
 */
var RunInstancesMonitoringEnabled =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RunInstancesMonitoringEnabled</code>.
   * Describes the monitoring of an instance.
   * @alias module:model/RunInstancesMonitoringEnabled
   * @param enabled {Boolean} 
   */
  function RunInstancesMonitoringEnabled(enabled) {
    _classCallCheck(this, RunInstancesMonitoringEnabled);

    RunInstancesMonitoringEnabled.initialize(this, enabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RunInstancesMonitoringEnabled, null, [{
    key: "initialize",
    value: function initialize(obj, enabled) {
      obj['Enabled'] = enabled;
    }
    /**
     * Constructs a <code>RunInstancesMonitoringEnabled</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunInstancesMonitoringEnabled} obj Optional instance to populate.
     * @return {module:model/RunInstancesMonitoringEnabled} The populated <code>RunInstancesMonitoringEnabled</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RunInstancesMonitoringEnabled();

        if (data.hasOwnProperty('Enabled')) {
          obj['Enabled'] = _ApiClient["default"].convertToType(data['Enabled'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return RunInstancesMonitoringEnabled;
}();
/**
 * @member {Boolean} Enabled
 */


RunInstancesMonitoringEnabled.prototype['Enabled'] = undefined;
var _default = RunInstancesMonitoringEnabled;
exports["default"] = _default;