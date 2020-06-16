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
 * The CustomFieldDefinitionJsonBean model module.
 * @module model/CustomFieldDefinitionJsonBean
 * @version 1.4.0
 */
var CustomFieldDefinitionJsonBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomFieldDefinitionJsonBean</code>.
   * @alias module:model/CustomFieldDefinitionJsonBean
   * @param name {String} The name of the custom field, which is displayed in Jira. This is not the unique identifier.
   * @param searcherKey {module:model/CustomFieldDefinitionJsonBean.SearcherKeyEnum} The searcher defines the way the field is searched in Jira. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher*.   The search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown):   *  `cascadingselect`: `cascadingselectsearcher`  *  `datepicker`: `daterange`  *  `datetime`: `datetimerange`  *  `float`: `exactnumber` or `numberrange`  *  `grouppicker`: `grouppickersearcher`  *  `importid`: `exactnumber` or `numberrange`  *  `labels`: `labelsearcher`  *  `multicheckboxes`: `multiselectsearcher`  *  `multigrouppicker`: `multiselectsearcher`  *  `multiselect`: `multiselectsearcher`  *  `multiuserpicker`: `userpickergroupsearcher`  *  `multiversion`: `versionsearcher`  *  `project`: `projectsearcher`  *  `radiobuttons`: `multiselectsearcher`  *  `readonlyfield`: `textsearcher`  *  `select`: `multiselectsearcher`  *  `textarea`: `textsearcher`  *  `textfield`: `textsearcher`  *  `url`: `exacttextsearcher`  *  `userpicker`: `userpickergroupsearcher`  *  `version`: `versionsearcher`
   * @param type {module:model/CustomFieldDefinitionJsonBean.TypeEnum} The type of the custom field. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppicker*.   *  `cascadingselect`: Allows multiple values to be selected using two select lists  *  `datepicker`: Stores a date using a picker control  *  `datetime`: Stores a date with a time component  *  `float`: Stores and validates a numeric (floating point) input  *  `grouppicker`: Stores a user group using a picker control  *  `importid`: A read-only field that stores the previous ID of the issue from the system that it was imported from  *  `labels`: Stores labels  *  `multicheckboxes`: Stores multiple values using checkboxes  *  `multigrouppicker`: Stores multiple user groups using a picker control  *  `multiselect`: Stores multiple values using a select list  *  `multiuserpicker`: Stores multiple users using a picker control  *  `multiversion`: Stores multiple versions from the versions available in a project using a picker control  *  `project`: Stores a project from a list of projects that the user is permitted to view  *  `radiobuttons`: Stores a value using radio buttons  *  `readonlyfield`: Stores a read-only text value, which can only be populated via the API  *  `select`: Stores a value from a configurable list of options  *  `textarea`: Stores a long text string using a multiline text area  *  `textfield`: Stores a text string using a single-line text box  *  `url`: Stores a URL  *  `userpicker`: Stores a user using a picker control  *  `version`: Stores a version using a picker control
   */
  function CustomFieldDefinitionJsonBean(name, searcherKey, type) {
    _classCallCheck(this, CustomFieldDefinitionJsonBean);

    CustomFieldDefinitionJsonBean.initialize(this, name, searcherKey, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomFieldDefinitionJsonBean, null, [{
    key: "initialize",
    value: function initialize(obj, name, searcherKey, type) {
      obj['name'] = name;
      obj['searcherKey'] = searcherKey;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>CustomFieldDefinitionJsonBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomFieldDefinitionJsonBean} obj Optional instance to populate.
     * @return {module:model/CustomFieldDefinitionJsonBean} The populated <code>CustomFieldDefinitionJsonBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomFieldDefinitionJsonBean();

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

  return CustomFieldDefinitionJsonBean;
}();
/**
 * The description of the custom field, which is displayed in Jira.
 * @member {String} description
 */


CustomFieldDefinitionJsonBean.prototype['description'] = undefined;
/**
 * The name of the custom field, which is displayed in Jira. This is not the unique identifier.
 * @member {String} name
 */

CustomFieldDefinitionJsonBean.prototype['name'] = undefined;
/**
 * The searcher defines the way the field is searched in Jira. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher*.   The search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown):   *  `cascadingselect`: `cascadingselectsearcher`  *  `datepicker`: `daterange`  *  `datetime`: `datetimerange`  *  `float`: `exactnumber` or `numberrange`  *  `grouppicker`: `grouppickersearcher`  *  `importid`: `exactnumber` or `numberrange`  *  `labels`: `labelsearcher`  *  `multicheckboxes`: `multiselectsearcher`  *  `multigrouppicker`: `multiselectsearcher`  *  `multiselect`: `multiselectsearcher`  *  `multiuserpicker`: `userpickergroupsearcher`  *  `multiversion`: `versionsearcher`  *  `project`: `projectsearcher`  *  `radiobuttons`: `multiselectsearcher`  *  `readonlyfield`: `textsearcher`  *  `select`: `multiselectsearcher`  *  `textarea`: `textsearcher`  *  `textfield`: `textsearcher`  *  `url`: `exacttextsearcher`  *  `userpicker`: `userpickergroupsearcher`  *  `version`: `versionsearcher`
 * @member {module:model/CustomFieldDefinitionJsonBean.SearcherKeyEnum} searcherKey
 */

CustomFieldDefinitionJsonBean.prototype['searcherKey'] = undefined;
/**
 * The type of the custom field. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppicker*.   *  `cascadingselect`: Allows multiple values to be selected using two select lists  *  `datepicker`: Stores a date using a picker control  *  `datetime`: Stores a date with a time component  *  `float`: Stores and validates a numeric (floating point) input  *  `grouppicker`: Stores a user group using a picker control  *  `importid`: A read-only field that stores the previous ID of the issue from the system that it was imported from  *  `labels`: Stores labels  *  `multicheckboxes`: Stores multiple values using checkboxes  *  `multigrouppicker`: Stores multiple user groups using a picker control  *  `multiselect`: Stores multiple values using a select list  *  `multiuserpicker`: Stores multiple users using a picker control  *  `multiversion`: Stores multiple versions from the versions available in a project using a picker control  *  `project`: Stores a project from a list of projects that the user is permitted to view  *  `radiobuttons`: Stores a value using radio buttons  *  `readonlyfield`: Stores a read-only text value, which can only be populated via the API  *  `select`: Stores a value from a configurable list of options  *  `textarea`: Stores a long text string using a multiline text area  *  `textfield`: Stores a text string using a single-line text box  *  `url`: Stores a URL  *  `userpicker`: Stores a user using a picker control  *  `version`: Stores a version using a picker control
 * @member {module:model/CustomFieldDefinitionJsonBean.TypeEnum} type
 */

CustomFieldDefinitionJsonBean.prototype['type'] = undefined;
/**
 * Allowed values for the <code>searcherKey</code> property.
 * @enum {String}
 * @readonly
 */

CustomFieldDefinitionJsonBean['SearcherKeyEnum'] = {
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
  "projectsearcher": "com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:textsearcher"
   * @const
   */
  "textsearcher": "com.atlassian.jira.plugin.system.customfieldtypes:textsearcher",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher"
   * @const
   */
  "userpickergroupsearcher": "com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher"
   * @const
   */
  "versionsearcher": "com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

CustomFieldDefinitionJsonBean['TypeEnum'] = {
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
  "multiselect": "com.atlassian.jira.plugin.system.customfieldtypes:multiselect",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker"
   * @const
   */
  "multiuserpicker": "com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:multiversion"
   * @const
   */
  "multiversion": "com.atlassian.jira.plugin.system.customfieldtypes:multiversion",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:project"
   * @const
   */
  "project": "com.atlassian.jira.plugin.system.customfieldtypes:project",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons"
   * @const
   */
  "radiobuttons": "com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:readonlyfield"
   * @const
   */
  "readonlyfield": "com.atlassian.jira.plugin.system.customfieldtypes:readonlyfield",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:select"
   * @const
   */
  "select": "com.atlassian.jira.plugin.system.customfieldtypes:select",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:textarea"
   * @const
   */
  "textarea": "com.atlassian.jira.plugin.system.customfieldtypes:textarea",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:textfield"
   * @const
   */
  "textfield": "com.atlassian.jira.plugin.system.customfieldtypes:textfield",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:url"
   * @const
   */
  "url": "com.atlassian.jira.plugin.system.customfieldtypes:url",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:userpicker"
   * @const
   */
  "userpicker": "com.atlassian.jira.plugin.system.customfieldtypes:userpicker",

  /**
   * value: "com.atlassian.jira.plugin.system.customfieldtypes:version"
   * @const
   */
  "version": "com.atlassian.jira.plugin.system.customfieldtypes:version"
};
var _default = CustomFieldDefinitionJsonBean;
exports["default"] = _default;