"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20097CustomFieldUsage = _interopRequireDefault(require("./InlineResponse20097CustomFieldUsage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20097 model module.
 * @module model/InlineResponse20097
 * @version 1.2.0
 */
var InlineResponse20097 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20097</code>.
   * 
   * @alias module:model/InlineResponse20097
   * @param customFieldUsage {Array.<module:model/InlineResponse20097CustomFieldUsage>} 
   * @param issueCountWithCustomFieldsShowingVersion {Number} 
   * @param issuesAffectedCount {Number} 
   * @param issuesFixedCount {Number} 
   * @param self {String} 
   */
  function InlineResponse20097(customFieldUsage, issueCountWithCustomFieldsShowingVersion, issuesAffectedCount, issuesFixedCount, self) {
    _classCallCheck(this, InlineResponse20097);

    InlineResponse20097.initialize(this, customFieldUsage, issueCountWithCustomFieldsShowingVersion, issuesAffectedCount, issuesFixedCount, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20097, null, [{
    key: "initialize",
    value: function initialize(obj, customFieldUsage, issueCountWithCustomFieldsShowingVersion, issuesAffectedCount, issuesFixedCount, self) {
      obj['customFieldUsage'] = customFieldUsage;
      obj['issueCountWithCustomFieldsShowingVersion'] = issueCountWithCustomFieldsShowingVersion;
      obj['issuesAffectedCount'] = issuesAffectedCount;
      obj['issuesFixedCount'] = issuesFixedCount;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20097</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20097} obj Optional instance to populate.
     * @return {module:model/InlineResponse20097} The populated <code>InlineResponse20097</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20097();

        if (data.hasOwnProperty('customFieldUsage')) {
          obj['customFieldUsage'] = _ApiClient["default"].convertToType(data['customFieldUsage'], [_InlineResponse20097CustomFieldUsage["default"]]);
        }

        if (data.hasOwnProperty('issueCountWithCustomFieldsShowingVersion')) {
          obj['issueCountWithCustomFieldsShowingVersion'] = _ApiClient["default"].convertToType(data['issueCountWithCustomFieldsShowingVersion'], 'Number');
        }

        if (data.hasOwnProperty('issuesAffectedCount')) {
          obj['issuesAffectedCount'] = _ApiClient["default"].convertToType(data['issuesAffectedCount'], 'Number');
        }

        if (data.hasOwnProperty('issuesFixedCount')) {
          obj['issuesFixedCount'] = _ApiClient["default"].convertToType(data['issuesFixedCount'], 'Number');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20097;
}();
/**
 * @member {Array.<module:model/InlineResponse20097CustomFieldUsage>} customFieldUsage
 */


InlineResponse20097.prototype['customFieldUsage'] = undefined;
/**
 * @member {Number} issueCountWithCustomFieldsShowingVersion
 */

InlineResponse20097.prototype['issueCountWithCustomFieldsShowingVersion'] = undefined;
/**
 * @member {Number} issuesAffectedCount
 */

InlineResponse20097.prototype['issuesAffectedCount'] = undefined;
/**
 * @member {Number} issuesFixedCount
 */

InlineResponse20097.prototype['issuesFixedCount'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20097.prototype['self'] = undefined;
var _default = InlineResponse20097;
exports["default"] = _default;