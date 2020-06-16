"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TimeTrackingConfiguration = _interopRequireDefault(require("./TimeTrackingConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Configuration model module.
 * @module model/Configuration
 * @version 1.4.0
 */
var Configuration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Configuration</code>.
   * Details about the configuration of Jira.
   * @alias module:model/Configuration
   */
  function Configuration() {
    _classCallCheck(this, Configuration);

    Configuration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Configuration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Configuration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Configuration} obj Optional instance to populate.
     * @return {module:model/Configuration} The populated <code>Configuration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Configuration();

        if (data.hasOwnProperty('attachmentsEnabled')) {
          obj['attachmentsEnabled'] = _ApiClient["default"].convertToType(data['attachmentsEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('issueLinkingEnabled')) {
          obj['issueLinkingEnabled'] = _ApiClient["default"].convertToType(data['issueLinkingEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('subTasksEnabled')) {
          obj['subTasksEnabled'] = _ApiClient["default"].convertToType(data['subTasksEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('timeTrackingConfiguration')) {
          obj['timeTrackingConfiguration'] = _ApiClient["default"].convertToType(data['timeTrackingConfiguration'], _TimeTrackingConfiguration["default"]);
        }

        if (data.hasOwnProperty('timeTrackingEnabled')) {
          obj['timeTrackingEnabled'] = _ApiClient["default"].convertToType(data['timeTrackingEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('unassignedIssuesAllowed')) {
          obj['unassignedIssuesAllowed'] = _ApiClient["default"].convertToType(data['unassignedIssuesAllowed'], 'Boolean');
        }

        if (data.hasOwnProperty('votingEnabled')) {
          obj['votingEnabled'] = _ApiClient["default"].convertToType(data['votingEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('watchingEnabled')) {
          obj['watchingEnabled'] = _ApiClient["default"].convertToType(data['watchingEnabled'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Configuration;
}();
/**
 * Whether the ability to add attachments to issues is enabled.
 * @member {Boolean} attachmentsEnabled
 */


Configuration.prototype['attachmentsEnabled'] = undefined;
/**
 * Whether the ability to link issues is enabled.
 * @member {Boolean} issueLinkingEnabled
 */

Configuration.prototype['issueLinkingEnabled'] = undefined;
/**
 * Whether the ability to create subtasks for issues is enabled.
 * @member {Boolean} subTasksEnabled
 */

Configuration.prototype['subTasksEnabled'] = undefined;
/**
 * The configuration of time tracking.
 * @member {module:model/TimeTrackingConfiguration} timeTrackingConfiguration
 */

Configuration.prototype['timeTrackingConfiguration'] = undefined;
/**
 * Whether the ability to track time is enabled. This property is deprecated.
 * @member {Boolean} timeTrackingEnabled
 */

Configuration.prototype['timeTrackingEnabled'] = undefined;
/**
 * Whether the ability to create unassigned issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
 * @member {Boolean} unassignedIssuesAllowed
 */

Configuration.prototype['unassignedIssuesAllowed'] = undefined;
/**
 * Whether the ability for users to vote on issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
 * @member {Boolean} votingEnabled
 */

Configuration.prototype['votingEnabled'] = undefined;
/**
 * Whether the ability for users to watch issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
 * @member {Boolean} watchingEnabled
 */

Configuration.prototype['watchingEnabled'] = undefined;
var _default = Configuration;
exports["default"] = _default;