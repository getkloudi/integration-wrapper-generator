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
 * The HealthCheckResult model module.
 * @module model/HealthCheckResult
 * @version 1.4.0
 */
var HealthCheckResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HealthCheckResult</code>.
   * Jira instance health check results. Deprecated and no longer returned.
   * @alias module:model/HealthCheckResult
   */
  function HealthCheckResult() {
    _classCallCheck(this, HealthCheckResult);

    HealthCheckResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HealthCheckResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HealthCheckResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HealthCheckResult} obj Optional instance to populate.
     * @return {module:model/HealthCheckResult} The populated <code>HealthCheckResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HealthCheckResult();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('passed')) {
          obj['passed'] = _ApiClient["default"].convertToType(data['passed'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return HealthCheckResult;
}();
/**
 * The description of the Jira health check item.
 * @member {String} description
 */


HealthCheckResult.prototype['description'] = undefined;
/**
 * The name of the Jira health check item.
 * @member {String} name
 */

HealthCheckResult.prototype['name'] = undefined;
/**
 * Whether the Jira health check item passed or failed.
 * @member {Boolean} passed
 */

HealthCheckResult.prototype['passed'] = undefined;
var _default = HealthCheckResult;
exports["default"] = _default;