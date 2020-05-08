"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2004Author = _interopRequireDefault(require("./InlineResponse2004Author"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20029Values model module.
 * @module model/InlineResponse20029Values
 * @version 1.3.1
 */
var InlineResponse20029Values = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20029Values</code>.
   * @alias module:model/InlineResponse20029Values
   * @param description {String} 
   * @param favourite {Boolean} 
   * @param favouritedCount {Number} 
   * @param id {String} 
   * @param jql {String} 
   * @param name {String} 
   * @param searchUrl {String} 
   * @param self {String} 
   * @param viewUrl {String} 
   */
  function InlineResponse20029Values(description, favourite, favouritedCount, id, jql, name, searchUrl, self, viewUrl) {
    _classCallCheck(this, InlineResponse20029Values);

    InlineResponse20029Values.initialize(this, description, favourite, favouritedCount, id, jql, name, searchUrl, self, viewUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20029Values, null, [{
    key: "initialize",
    value: function initialize(obj, description, favourite, favouritedCount, id, jql, name, searchUrl, self, viewUrl) {
      obj['description'] = description;
      obj['favourite'] = favourite;
      obj['favouritedCount'] = favouritedCount;
      obj['id'] = id;
      obj['jql'] = jql;
      obj['name'] = name;
      obj['searchUrl'] = searchUrl;
      obj['self'] = self;
      obj['viewUrl'] = viewUrl;
    }
    /**
     * Constructs a <code>InlineResponse20029Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20029Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20029Values} The populated <code>InlineResponse20029Values</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20029Values();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('favourite')) {
          obj['favourite'] = _ApiClient["default"].convertToType(data['favourite'], 'Boolean');
        }

        if (data.hasOwnProperty('favouritedCount')) {
          obj['favouritedCount'] = _ApiClient["default"].convertToType(data['favouritedCount'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('jql')) {
          obj['jql'] = _ApiClient["default"].convertToType(data['jql'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _InlineResponse2004Author["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('searchUrl')) {
          obj['searchUrl'] = _ApiClient["default"].convertToType(data['searchUrl'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('sharePermissions')) {
          obj['sharePermissions'] = _ApiClient["default"].convertToType(data['sharePermissions'], [Object]);
        }

        if (data.hasOwnProperty('subscriptions')) {
          obj['subscriptions'] = _ApiClient["default"].convertToType(data['subscriptions'], [Object]);
        }

        if (data.hasOwnProperty('viewUrl')) {
          obj['viewUrl'] = _ApiClient["default"].convertToType(data['viewUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20029Values;
}();
/**
 * @member {String} description
 */


InlineResponse20029Values.prototype['description'] = undefined;
/**
 * @member {Boolean} favourite
 */

InlineResponse20029Values.prototype['favourite'] = undefined;
/**
 * @member {Number} favouritedCount
 */

InlineResponse20029Values.prototype['favouritedCount'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20029Values.prototype['id'] = undefined;
/**
 * @member {String} jql
 */

InlineResponse20029Values.prototype['jql'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20029Values.prototype['name'] = undefined;
/**
 * @member {module:model/InlineResponse2004Author} owner
 */

InlineResponse20029Values.prototype['owner'] = undefined;
/**
 * @member {String} searchUrl
 */

InlineResponse20029Values.prototype['searchUrl'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20029Values.prototype['self'] = undefined;
/**
 * @member {Array.<Object>} sharePermissions
 */

InlineResponse20029Values.prototype['sharePermissions'] = undefined;
/**
 * @member {Array.<Object>} subscriptions
 */

InlineResponse20029Values.prototype['subscriptions'] = undefined;
/**
 * @member {String} viewUrl
 */

InlineResponse20029Values.prototype['viewUrl'] = undefined;
var _default = InlineResponse20029Values;
exports["default"] = _default;