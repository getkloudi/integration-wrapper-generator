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
 * The CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication model module.
 * @module model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication
 * @version 1.2.0
 */
var CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication</code>.
   * @alias module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication
   * @param name {String} 
   * @param type {String} 
   */
  function CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication(name, type) {
    _classCallCheck(this, CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication);

    CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication.initialize(this, name, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication, null, [{
    key: "initialize",
    value: function initialize(obj, name, type) {
      obj['name'] = name;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication} obj Optional instance to populate.
     * @return {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication} The populated <code>CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication;
}();
/**
 * @member {String} name
 */


CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication.prototype['name'] = undefined;
/**
 * @member {String} type
 */

CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication.prototype['type'] = undefined;
var _default = CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication;
exports["default"] = _default;