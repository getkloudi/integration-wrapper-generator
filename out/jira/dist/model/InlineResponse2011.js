"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2011Schema = _interopRequireDefault(require("./InlineResponse2011Schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2011 model module.
 * @module model/InlineResponse2011
 * @version 1.2.0
 */
var InlineResponse2011 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2011</code>.
   * 
   * @alias module:model/InlineResponse2011
   * @param clauseNames {Array.<Object>} 
   * @param custom {Boolean} 
   * @param id {String} 
   * @param name {String} 
   * @param navigable {Boolean} 
   * @param orderable {Boolean} 
   * @param schema {module:model/InlineResponse2011Schema} 
   * @param searchable {Boolean} 
   */
  function InlineResponse2011(clauseNames, custom, id, name, navigable, orderable, schema, searchable) {
    _classCallCheck(this, InlineResponse2011);

    InlineResponse2011.initialize(this, clauseNames, custom, id, name, navigable, orderable, schema, searchable);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2011, null, [{
    key: "initialize",
    value: function initialize(obj, clauseNames, custom, id, name, navigable, orderable, schema, searchable) {
      obj['clauseNames'] = clauseNames;
      obj['custom'] = custom;
      obj['id'] = id;
      obj['name'] = name;
      obj['navigable'] = navigable;
      obj['orderable'] = orderable;
      obj['schema'] = schema;
      obj['searchable'] = searchable;
    }
    /**
     * Constructs a <code>InlineResponse2011</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2011} obj Optional instance to populate.
     * @return {module:model/InlineResponse2011} The populated <code>InlineResponse2011</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2011();

        if (data.hasOwnProperty('clauseNames')) {
          obj['clauseNames'] = _ApiClient["default"].convertToType(data['clauseNames'], [Object]);
        }

        if (data.hasOwnProperty('custom')) {
          obj['custom'] = _ApiClient["default"].convertToType(data['custom'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
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
          obj['schema'] = _InlineResponse2011Schema["default"].constructFromObject(data['schema']);
        }

        if (data.hasOwnProperty('searchable')) {
          obj['searchable'] = _ApiClient["default"].convertToType(data['searchable'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2011;
}();
/**
 * @member {Array.<Object>} clauseNames
 */


InlineResponse2011.prototype['clauseNames'] = undefined;
/**
 * @member {Boolean} custom
 */

InlineResponse2011.prototype['custom'] = undefined;
/**
 * @member {String} id
 */

InlineResponse2011.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse2011.prototype['name'] = undefined;
/**
 * @member {Boolean} navigable
 */

InlineResponse2011.prototype['navigable'] = undefined;
/**
 * @member {Boolean} orderable
 */

InlineResponse2011.prototype['orderable'] = undefined;
/**
 * @member {module:model/InlineResponse2011Schema} schema
 */

InlineResponse2011.prototype['schema'] = undefined;
/**
 * @member {Boolean} searchable
 */

InlineResponse2011.prototype['searchable'] = undefined;
var _default = InlineResponse2011;
exports["default"] = _default;