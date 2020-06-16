"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JsonTypeBean = _interopRequireDefault(require("./JsonTypeBean"));

var _Scope = _interopRequireDefault(require("./Scope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FieldDetails model module.
 * @module model/FieldDetails
 * @version 1.4.0
 */
var FieldDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldDetails</code>.
   * Details about a field.
   * @alias module:model/FieldDetails
   */
  function FieldDetails() {
    _classCallCheck(this, FieldDetails);

    FieldDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FieldDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldDetails} obj Optional instance to populate.
     * @return {module:model/FieldDetails} The populated <code>FieldDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldDetails();

        if (data.hasOwnProperty('clauseNames')) {
          obj['clauseNames'] = _ApiClient["default"].convertToType(data['clauseNames'], ['String']);
        }

        if (data.hasOwnProperty('custom')) {
          obj['custom'] = _ApiClient["default"].convertToType(data['custom'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('navigable')) {
          obj['navigable'] = _ApiClient["default"].convertToType(data['navigable'], 'Boolean');
        }

        if (data.hasOwnProperty('orderable')) {
          obj['orderable'] = _ApiClient["default"].convertToType(data['orderable'], 'Boolean');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient["default"].convertToType(data['schema'], _JsonTypeBean["default"]);
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], _Scope["default"]);
        }

        if (data.hasOwnProperty('searchable')) {
          obj['searchable'] = _ApiClient["default"].convertToType(data['searchable'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return FieldDetails;
}();
/**
 * The names that can be used to reference the field in an advanced search. For more information, see [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ).
 * @member {Array.<String>} clauseNames
 */


FieldDetails.prototype['clauseNames'] = undefined;
/**
 * Whether the field is a custom field.
 * @member {Boolean} custom
 */

FieldDetails.prototype['custom'] = undefined;
/**
 * The ID of the field.
 * @member {String} id
 */

FieldDetails.prototype['id'] = undefined;
/**
 * The key of the field.
 * @member {String} key
 */

FieldDetails.prototype['key'] = undefined;
/**
 * The name of the field.
 * @member {String} name
 */

FieldDetails.prototype['name'] = undefined;
/**
 * Whether the field can be used as a column on the issue navigator.
 * @member {Boolean} navigable
 */

FieldDetails.prototype['navigable'] = undefined;
/**
 * Whether the content of the field can be used to order lists.
 * @member {Boolean} orderable
 */

FieldDetails.prototype['orderable'] = undefined;
/**
 * The data schema for the field.
 * @member {module:model/JsonTypeBean} schema
 */

FieldDetails.prototype['schema'] = undefined;
/**
 * The scope of the field.
 * @member {module:model/Scope} scope
 */

FieldDetails.prototype['scope'] = undefined;
/**
 * Whether the content of the field can be searched.
 * @member {Boolean} searchable
 */

FieldDetails.prototype['searchable'] = undefined;
var _default = FieldDetails;
exports["default"] = _default;