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
 * The InlineObject57 model module.
 * @module model/InlineObject57
 * @version 1.3.1
 */
var InlineObject57 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject57</code>.
   * @alias module:model/InlineObject57
   */
  function InlineObject57() {
    _classCallCheck(this, InlineObject57);

    InlineObject57.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject57, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject57</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject57} obj Optional instance to populate.
     * @return {module:model/InlineObject57} The populated <code>InlineObject57</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject57();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], ['String']);
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], ['String']);
        }

        if (data.hasOwnProperty('fieldsByKeys')) {
          obj['fieldsByKeys'] = _ApiClient["default"].convertToType(data['fieldsByKeys'], 'Boolean');
        }

        if (data.hasOwnProperty('jql')) {
          obj['jql'] = _ApiClient["default"].convertToType(data['jql'], 'String');
        }

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], ['String']);
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('validateQuery')) {
          obj['validateQuery'] = _ApiClient["default"].convertToType(data['validateQuery'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject57;
}();
/**
 * Use expand to include additional information about issues in the response. This parameter accepts multiple values separated by a comma:
 * @member {Array.<String>} expand
 */


InlineObject57.prototype['expand'] = undefined;
/**
 * A comma-separated list of fields to return for each issue, use it to retrieve a subset of fields. Allowed values
 * @member {Array.<String>} fields
 */

InlineObject57.prototype['fields'] = undefined;
/**
 * Reference fields by their key (rather than ID). The default is false.
 * @member {Boolean} fieldsByKeys
 */

InlineObject57.prototype['fieldsByKeys'] = undefined;
/**
 * A JQL expression.
 * @member {String} jql
 */

InlineObject57.prototype['jql'] = undefined;
/**
 * The maximum number of items to return per page. The default is 50 and maximum is 100.
 * @member {Number} maxResults
 */

InlineObject57.prototype['maxResults'] = undefined;
/**
 * A comma-separated list of up to 5 issue properties to include in the results.
 * @member {Array.<String>} properties
 */

InlineObject57.prototype['properties'] = undefined;
/**
 * The index of the first item to return in the page of results (page offset). The base index is 0.
 * @member {Number} startAt
 */

InlineObject57.prototype['startAt'] = undefined;
/**
 * Determines how to validate the JQL query and treat the validation results. Supported values:
 * @member {module:model/InlineObject57.ValidateQueryEnum} validateQuery
 */

InlineObject57.prototype['validateQuery'] = undefined;
/**
 * Allowed values for the <code>validateQuery</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject57['ValidateQueryEnum'] = {
  /**
   * value: "strict"
   * @const
   */
  "strict": "strict",

  /**
   * value: "warn"
   * @const
   */
  "warn": "warn",

  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "true"
   * @const
   */
  "true": "true",

  /**
   * value: "false"
   * @const
   */
  "false": "false"
};
var _default = InlineObject57;
exports["default"] = _default;