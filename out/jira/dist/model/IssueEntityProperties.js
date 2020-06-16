"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JsonNode = _interopRequireDefault(require("./JsonNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueEntityProperties model module.
 * @module model/IssueEntityProperties
 * @version 1.4.0
 */
var IssueEntityProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueEntityProperties</code>.
   * Lists of issues and entity properties. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.
   * @alias module:model/IssueEntityProperties
   */
  function IssueEntityProperties() {
    _classCallCheck(this, IssueEntityProperties);

    IssueEntityProperties.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEntityProperties, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueEntityProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEntityProperties} obj Optional instance to populate.
     * @return {module:model/IssueEntityProperties} The populated <code>IssueEntityProperties</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEntityProperties();

        if (data.hasOwnProperty('entitiesIds')) {
          obj['entitiesIds'] = _ApiClient["default"].convertToType(data['entitiesIds'], ['Number']);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], {
            'String': _JsonNode["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return IssueEntityProperties;
}();
/**
 * A list of entity property IDs.
 * @member {Array.<Number>} entitiesIds
 */


IssueEntityProperties.prototype['entitiesIds'] = undefined;
/**
 * A list of entity property keys and values.
 * @member {Object.<String, module:model/JsonNode>} properties
 */

IssueEntityProperties.prototype['properties'] = undefined;
var _default = IssueEntityProperties;
exports["default"] = _default;