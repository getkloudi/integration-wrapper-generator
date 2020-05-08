"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20026Subscriptions = _interopRequireDefault(require("./InlineResponse20026Subscriptions"));

var _InlineResponse2004Author = _interopRequireDefault(require("./InlineResponse2004Author"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20028 model module.
 * @module model/InlineResponse20028
 * @version 1.3.1
 */
var InlineResponse20028 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20028</code>.
   * @alias module:model/InlineResponse20028
   * @param description {String} 
   * @param favourite {Boolean} 
   * @param favouritedCount {Number} 
   * @param id {String} 
   * @param jql {String} 
   * @param name {String} 
   * @param owner {module:model/InlineResponse2004Author} 
   * @param searchUrl {String} 
   * @param self {String} 
   * @param sharePermissions {Array.<Object>} 
   * @param subscriptions {module:model/InlineResponse20026Subscriptions} 
   * @param viewUrl {String} 
   */
  function InlineResponse20028(description, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, subscriptions, viewUrl) {
    _classCallCheck(this, InlineResponse20028);

    InlineResponse20028.initialize(this, description, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, subscriptions, viewUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20028, null, [{
    key: "initialize",
    value: function initialize(obj, description, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, subscriptions, viewUrl) {
      obj['description'] = description;
      obj['favourite'] = favourite;
      obj['favouritedCount'] = favouritedCount;
      obj['id'] = id;
      obj['jql'] = jql;
      obj['name'] = name;
      obj['owner'] = owner;
      obj['searchUrl'] = searchUrl;
      obj['self'] = self;
      obj['sharePermissions'] = sharePermissions;
      obj['subscriptions'] = subscriptions;
      obj['viewUrl'] = viewUrl;
    }
    /**
     * Constructs a <code>InlineResponse20028</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20028} obj Optional instance to populate.
     * @return {module:model/InlineResponse20028} The populated <code>InlineResponse20028</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20028();

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
          obj['subscriptions'] = _InlineResponse20026Subscriptions["default"].constructFromObject(data['subscriptions']);
        }

        if (data.hasOwnProperty('viewUrl')) {
          obj['viewUrl'] = _ApiClient["default"].convertToType(data['viewUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20028;
}();
/**
 * @member {String} description
 */


InlineResponse20028.prototype['description'] = undefined;
/**
 * @member {Boolean} favourite
 */

InlineResponse20028.prototype['favourite'] = undefined;
/**
 * @member {Number} favouritedCount
 */

InlineResponse20028.prototype['favouritedCount'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20028.prototype['id'] = undefined;
/**
 * @member {String} jql
 */

InlineResponse20028.prototype['jql'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20028.prototype['name'] = undefined;
/**
 * @member {module:model/InlineResponse2004Author} owner
 */

InlineResponse20028.prototype['owner'] = undefined;
/**
 * @member {String} searchUrl
 */

InlineResponse20028.prototype['searchUrl'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20028.prototype['self'] = undefined;
/**
 * @member {Array.<Object>} sharePermissions
 */

InlineResponse20028.prototype['sharePermissions'] = undefined;
/**
 * @member {module:model/InlineResponse20026Subscriptions} subscriptions
 */

InlineResponse20028.prototype['subscriptions'] = undefined;
/**
 * @member {String} viewUrl
 */

InlineResponse20028.prototype['viewUrl'] = undefined;
var _default = InlineResponse20028;
exports["default"] = _default;