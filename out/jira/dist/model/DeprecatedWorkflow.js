"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Scope = _interopRequireDefault(require("./Scope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeprecatedWorkflow model module.
 * @module model/DeprecatedWorkflow
 * @version 1.4.0
 */
var DeprecatedWorkflow = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeprecatedWorkflow</code>.
   * Details about a workflow.
   * @alias module:model/DeprecatedWorkflow
   */
  function DeprecatedWorkflow() {
    _classCallCheck(this, DeprecatedWorkflow);

    DeprecatedWorkflow.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeprecatedWorkflow, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeprecatedWorkflow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeprecatedWorkflow} obj Optional instance to populate.
     * @return {module:model/DeprecatedWorkflow} The populated <code>DeprecatedWorkflow</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeprecatedWorkflow();

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('lastModifiedDate')) {
          obj['lastModifiedDate'] = _ApiClient["default"].convertToType(data['lastModifiedDate'], 'String');
        }

        if (data.hasOwnProperty('lastModifiedUser')) {
          obj['lastModifiedUser'] = _ApiClient["default"].convertToType(data['lastModifiedUser'], 'String');
        }

        if (data.hasOwnProperty('lastModifiedUserAccountId')) {
          obj['lastModifiedUserAccountId'] = _ApiClient["default"].convertToType(data['lastModifiedUserAccountId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], _Scope["default"]);
        }

        if (data.hasOwnProperty('steps')) {
          obj['steps'] = _ApiClient["default"].convertToType(data['steps'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DeprecatedWorkflow;
}();
/**
 * @member {Boolean} default
 */


DeprecatedWorkflow.prototype['default'] = undefined;
/**
 * The description of the workflow.
 * @member {String} description
 */

DeprecatedWorkflow.prototype['description'] = undefined;
/**
 * The datetime the workflow was last modified.
 * @member {String} lastModifiedDate
 */

DeprecatedWorkflow.prototype['lastModifiedDate'] = undefined;
/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} lastModifiedUser
 */

DeprecatedWorkflow.prototype['lastModifiedUser'] = undefined;
/**
 * The account ID of the user that last modified the workflow.
 * @member {String} lastModifiedUserAccountId
 */

DeprecatedWorkflow.prototype['lastModifiedUserAccountId'] = undefined;
/**
 * The name of the workflow.
 * @member {String} name
 */

DeprecatedWorkflow.prototype['name'] = undefined;
/**
 * The scope where this workflow applies
 * @member {module:model/Scope} scope
 */

DeprecatedWorkflow.prototype['scope'] = undefined;
/**
 * The number of steps included in the workflow.
 * @member {Number} steps
 */

DeprecatedWorkflow.prototype['steps'] = undefined;
var _default = DeprecatedWorkflow;
exports["default"] = _default;