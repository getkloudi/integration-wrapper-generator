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
 * The InlineObject7 model module.
 * @module model/InlineObject7
 * @version 1.1.0
 */
var InlineObject7 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject7</code>.
   * @alias module:model/InlineObject7
   */
  function InlineObject7() {
    _classCallCheck(this, InlineObject7);

    InlineObject7.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject7, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject7</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject7} obj Optional instance to populate.
     * @return {module:model/InlineObject7} The populated <code>InlineObject7</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject7();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('searcherKey')) {
          obj['searcherKey'] = _ApiClient["default"].convertToType(data['searcherKey'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject7;
}();
/**
 * The description of the custom field, which is displayed in the UI.
 * @member {String} description
 */


InlineObject7.prototype['description'] = undefined;
/**
 * The name of the custom field, which is displayed in the UI. This is not the unique identifier.
 * @member {String} name
 */

InlineObject7.prototype['name'] = undefined;
/**
 * The searcher defines the way the field is searched in Jira. For example, com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher.The search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown):
 * @member {module:model/InlineObject7.SearcherKeyEnum} searcherKey
 */

InlineObject7.prototype['searcherKey'] = undefined;
/**
 * The type of the custom field. For example, com.atlassian.jira.plugin.system.customfieldtypes:grouppicker.
 * @member {module:model/InlineObject7.TypeEnum} type
 */

InlineObject7.prototype['type'] = undefined;
/**
 * Allowed values for the <code>searcherKey</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject7['SearcherKeyEnum'] = {
  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher"
   * @const
   */
  "cascadingselectsearcher": "com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:daterange"
   * @const
   */
  "daterange": "com.atlassian.jira.plugin.system.customfieldtypes:daterange",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:datetimerange"
   * @const
   */
  "datetimerange": "com.atlassian.jira.plugin.system.customfieldtypes:datetimerange",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:exactnumber"
   * @const
   */
  "exactnumber": "com.atlassian.jira.plugin.system.customfieldtypes:exactnumber",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher"
   * @const
   */
  "exacttextsearcher": "com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher"
   * @const
   */
  "grouppickersearcher": "com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher"
   * @const
   */
  "labelsearcher": "com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher"
   * @const
   */
  "multiselectsearcher": "com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:numberrange"
   * @const
   */
  "numberrange": "com.atlassian.jira.plugin.system.customfieldtypes:numberrange",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher"
   * @const
   */
  "projectsearcher": "com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject7['TypeEnum'] = {
  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:cascadingselect"
   * @const
   */
  "cascadingselect": "com.atlassian.jira.plugin.system.customfieldtypes:cascadingselect",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:datepicker"
   * @const
   */
  "datepicker": "com.atlassian.jira.plugin.system.customfieldtypes:datepicker",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:datetime"
   * @const
   */
  "datetime": "com.atlassian.jira.plugin.system.customfieldtypes:datetime",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:float"
   * @const
   */
  "float": "com.atlassian.jira.plugin.system.customfieldtypes:float",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:grouppicker"
   * @const
   */
  "grouppicker": "com.atlassian.jira.plugin.system.customfieldtypes:grouppicker",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:importid"
   * @const
   */
  "importid": "com.atlassian.jira.plugin.system.customfieldtypes:importid",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:labels"
   * @const
   */
  "labels": "com.atlassian.jira.plugin.system.customfieldtypes:labels",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes"
   * @const
   */
  "multicheckboxes": "com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker"
   * @const
   */
  "multigrouppicker": "com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:multiselect"
   * @const
   */
  "multiselect": "com.atlassian.jira.plugin.system.customfieldtypes:multiselect"
};
var _default = InlineObject7;
exports["default"] = _default;