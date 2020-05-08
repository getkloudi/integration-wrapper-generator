"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20013TimeTrackingConfiguration = _interopRequireDefault(require("./InlineResponse20013TimeTrackingConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20013 model module.
 * @module model/InlineResponse20013
 * @version 1.2.0
 */
var InlineResponse20013 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20013</code>.
   * 
   * @alias module:model/InlineResponse20013
   * @param attachmentsEnabled {Boolean} 
   * @param issueLinkingEnabled {Boolean} 
   * @param subTasksEnabled {Boolean} 
   * @param timeTrackingConfiguration {module:model/InlineResponse20013TimeTrackingConfiguration} 
   * @param timeTrackingEnabled {Boolean} 
   * @param unassignedIssuesAllowed {Boolean} 
   * @param votingEnabled {Boolean} 
   * @param watchingEnabled {Boolean} 
   */
  function InlineResponse20013(attachmentsEnabled, issueLinkingEnabled, subTasksEnabled, timeTrackingConfiguration, timeTrackingEnabled, unassignedIssuesAllowed, votingEnabled, watchingEnabled) {
    _classCallCheck(this, InlineResponse20013);

    InlineResponse20013.initialize(this, attachmentsEnabled, issueLinkingEnabled, subTasksEnabled, timeTrackingConfiguration, timeTrackingEnabled, unassignedIssuesAllowed, votingEnabled, watchingEnabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20013, null, [{
    key: "initialize",
    value: function initialize(obj, attachmentsEnabled, issueLinkingEnabled, subTasksEnabled, timeTrackingConfiguration, timeTrackingEnabled, unassignedIssuesAllowed, votingEnabled, watchingEnabled) {
      obj['attachmentsEnabled'] = attachmentsEnabled;
      obj['issueLinkingEnabled'] = issueLinkingEnabled;
      obj['subTasksEnabled'] = subTasksEnabled;
      obj['timeTrackingConfiguration'] = timeTrackingConfiguration;
      obj['timeTrackingEnabled'] = timeTrackingEnabled;
      obj['unassignedIssuesAllowed'] = unassignedIssuesAllowed;
      obj['votingEnabled'] = votingEnabled;
      obj['watchingEnabled'] = watchingEnabled;
    }
    /**
     * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20013} obj Optional instance to populate.
     * @return {module:model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20013();

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
          obj['timeTrackingConfiguration'] = _InlineResponse20013TimeTrackingConfiguration["default"].constructFromObject(data['timeTrackingConfiguration']);
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

  return InlineResponse20013;
}();
/**
 * @member {Boolean} attachmentsEnabled
 */


InlineResponse20013.prototype['attachmentsEnabled'] = undefined;
/**
 * @member {Boolean} issueLinkingEnabled
 */

InlineResponse20013.prototype['issueLinkingEnabled'] = undefined;
/**
 * @member {Boolean} subTasksEnabled
 */

InlineResponse20013.prototype['subTasksEnabled'] = undefined;
/**
 * @member {module:model/InlineResponse20013TimeTrackingConfiguration} timeTrackingConfiguration
 */

InlineResponse20013.prototype['timeTrackingConfiguration'] = undefined;
/**
 * @member {Boolean} timeTrackingEnabled
 */

InlineResponse20013.prototype['timeTrackingEnabled'] = undefined;
/**
 * @member {Boolean} unassignedIssuesAllowed
 */

InlineResponse20013.prototype['unassignedIssuesAllowed'] = undefined;
/**
 * @member {Boolean} votingEnabled
 */

InlineResponse20013.prototype['votingEnabled'] = undefined;
/**
 * @member {Boolean} watchingEnabled
 */

InlineResponse20013.prototype['watchingEnabled'] = undefined;
var _default = InlineResponse20013;
exports["default"] = _default;