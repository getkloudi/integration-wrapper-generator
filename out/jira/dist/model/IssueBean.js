"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IncludedFields = _interopRequireDefault(require("./IncludedFields"));

var _IssueTransition = _interopRequireDefault(require("./IssueTransition"));

var _IssueUpdateMetadata = _interopRequireDefault(require("./IssueUpdateMetadata"));

var _JsonTypeBean = _interopRequireDefault(require("./JsonTypeBean"));

var _Operations = _interopRequireDefault(require("./Operations"));

var _PageOfChangelogs = _interopRequireDefault(require("./PageOfChangelogs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueBean model module.
 * @module model/IssueBean
 * @version 1.4.0
 */
var IssueBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueBean</code>.
   * @alias module:model/IssueBean
   */
  function IssueBean() {
    _classCallCheck(this, IssueBean);

    IssueBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueBean} obj Optional instance to populate.
     * @return {module:model/IssueBean} The populated <code>IssueBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueBean();

        if (data.hasOwnProperty('changelog')) {
          obj['changelog'] = _ApiClient["default"].convertToType(data['changelog'], _PageOfChangelogs["default"]);
        }

        if (data.hasOwnProperty('editmeta')) {
          obj['editmeta'] = _ApiClient["default"].convertToType(data['editmeta'], _IssueUpdateMetadata["default"]);
        }

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('fieldsToInclude')) {
          obj['fieldsToInclude'] = _IncludedFields["default"].constructFromObject(data['fieldsToInclude']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('names')) {
          obj['names'] = _ApiClient["default"].convertToType(data['names'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('operations')) {
          obj['operations'] = _ApiClient["default"].convertToType(data['operations'], _Operations["default"]);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('renderedFields')) {
          obj['renderedFields'] = _ApiClient["default"].convertToType(data['renderedFields'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient["default"].convertToType(data['schema'], {
            'String': _JsonTypeBean["default"]
          });
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('transitions')) {
          obj['transitions'] = _ApiClient["default"].convertToType(data['transitions'], [_IssueTransition["default"]]);
        }

        if (data.hasOwnProperty('versionedRepresentations')) {
          obj['versionedRepresentations'] = _ApiClient["default"].convertToType(data['versionedRepresentations'], {
            'String': {
              'String': Object
            }
          });
        }
      }

      return obj;
    }
  }]);

  return IssueBean;
}();
/**
 * Details of changelogs associated with the issue.
 * @member {module:model/PageOfChangelogs} changelog
 */


IssueBean.prototype['changelog'] = undefined;
/**
 * The metadata for the fields on the issue that can be amended.
 * @member {module:model/IssueUpdateMetadata} editmeta
 */

IssueBean.prototype['editmeta'] = undefined;
/**
 * Expand options that include additional issue details in the response.
 * @member {String} expand
 */

IssueBean.prototype['expand'] = undefined;
/**
 * @member {Object.<String, Object>} fields
 */

IssueBean.prototype['fields'] = undefined;
/**
 * @member {module:model/IncludedFields} fieldsToInclude
 */

IssueBean.prototype['fieldsToInclude'] = undefined;
/**
 * The ID of the issue.
 * @member {String} id
 */

IssueBean.prototype['id'] = undefined;
/**
 * The key of the issue.
 * @member {String} key
 */

IssueBean.prototype['key'] = undefined;
/**
 * The ID and name of each field present on the issue.
 * @member {Object.<String, String>} names
 */

IssueBean.prototype['names'] = undefined;
/**
 * The operations that can be performed on the issue.
 * @member {module:model/Operations} operations
 */

IssueBean.prototype['operations'] = undefined;
/**
 * Details of the issue properties identified in the request.
 * @member {Object.<String, Object>} properties
 */

IssueBean.prototype['properties'] = undefined;
/**
 * The rendered value of each field present on the issue.
 * @member {Object.<String, Object>} renderedFields
 */

IssueBean.prototype['renderedFields'] = undefined;
/**
 * The schema describing each field present on the issue.
 * @member {Object.<String, module:model/JsonTypeBean>} schema
 */

IssueBean.prototype['schema'] = undefined;
/**
 * The URL of the issue details.
 * @member {String} self
 */

IssueBean.prototype['self'] = undefined;
/**
 * The transitions that can be performed on the issue.
 * @member {Array.<module:model/IssueTransition>} transitions
 */

IssueBean.prototype['transitions'] = undefined;
/**
 * The versions of each field on the issue.
 * @member {Object.<String, Object.<String, Object>>} versionedRepresentations
 */

IssueBean.prototype['versionedRepresentations'] = undefined;
var _default = IssueBean;
exports["default"] = _default;