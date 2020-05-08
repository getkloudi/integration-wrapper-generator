"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatusIcon = _interopRequireDefault(require("./CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatusIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus model module.
 * @module model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus
 * @version 1.1.0
 */
var CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus</code>.
   * @alias module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus
   * @param icon {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatusIcon} 
   * @param resolved {Boolean} 
   */
  function CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus(icon, resolved) {
    _classCallCheck(this, CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus);

    CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus.initialize(this, icon, resolved);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus, null, [{
    key: "initialize",
    value: function initialize(obj, icon, resolved) {
      obj['icon'] = icon;
      obj['resolved'] = resolved;
    }
    /**
     * Constructs a <code>CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus} obj Optional instance to populate.
     * @return {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus} The populated <code>CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus();

        if (data.hasOwnProperty('icon')) {
          obj['icon'] = _CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatusIcon["default"].constructFromObject(data['icon']);
        }

        if (data.hasOwnProperty('resolved')) {
          obj['resolved'] = _ApiClient["default"].convertToType(data['resolved'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus;
}();
/**
 * @member {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatusIcon} icon
 */


CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus.prototype['icon'] = undefined;
/**
 * @member {Boolean} resolved
 */

CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus.prototype['resolved'] = undefined;
var _default = CloudidRestApi3IssueIssueIdOrKeyRemotelinkObjectStatus;
exports["default"] = _default;