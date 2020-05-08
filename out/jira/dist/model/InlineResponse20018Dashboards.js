"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20018Owner = _interopRequireDefault(require("./InlineResponse20018Owner"));

var _InlineResponse20018SharePermissions = _interopRequireDefault(require("./InlineResponse20018SharePermissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20018Dashboards model module.
 * @module model/InlineResponse20018Dashboards
 * @version 1.3.1
 */
var InlineResponse20018Dashboards = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20018Dashboards</code>.
   * @alias module:model/InlineResponse20018Dashboards
   * @param id {String} 
   * @param isFavourite {Boolean} 
   * @param name {String} 
   * @param popularity {Number} 
   * @param self {String} 
   * @param view {String} 
   */
  function InlineResponse20018Dashboards(id, isFavourite, name, popularity, self, view) {
    _classCallCheck(this, InlineResponse20018Dashboards);

    InlineResponse20018Dashboards.initialize(this, id, isFavourite, name, popularity, self, view);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20018Dashboards, null, [{
    key: "initialize",
    value: function initialize(obj, id, isFavourite, name, popularity, self, view) {
      obj['id'] = id;
      obj['isFavourite'] = isFavourite;
      obj['name'] = name;
      obj['popularity'] = popularity;
      obj['self'] = self;
      obj['view'] = view;
    }
    /**
     * Constructs a <code>InlineResponse20018Dashboards</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20018Dashboards} obj Optional instance to populate.
     * @return {module:model/InlineResponse20018Dashboards} The populated <code>InlineResponse20018Dashboards</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20018Dashboards();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isFavourite')) {
          obj['isFavourite'] = _ApiClient["default"].convertToType(data['isFavourite'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _InlineResponse20018Owner["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('popularity')) {
          obj['popularity'] = _ApiClient["default"].convertToType(data['popularity'], 'Number');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('sharePermissions')) {
          obj['sharePermissions'] = _ApiClient["default"].convertToType(data['sharePermissions'], [_InlineResponse20018SharePermissions["default"]]);
        }

        if (data.hasOwnProperty('view')) {
          obj['view'] = _ApiClient["default"].convertToType(data['view'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20018Dashboards;
}();
/**
 * @member {String} id
 */


InlineResponse20018Dashboards.prototype['id'] = undefined;
/**
 * @member {Boolean} isFavourite
 */

InlineResponse20018Dashboards.prototype['isFavourite'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20018Dashboards.prototype['name'] = undefined;
/**
 * @member {module:model/InlineResponse20018Owner} owner
 */

InlineResponse20018Dashboards.prototype['owner'] = undefined;
/**
 * @member {Number} popularity
 */

InlineResponse20018Dashboards.prototype['popularity'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20018Dashboards.prototype['self'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20018SharePermissions>} sharePermissions
 */

InlineResponse20018Dashboards.prototype['sharePermissions'] = undefined;
/**
 * @member {String} view
 */

InlineResponse20018Dashboards.prototype['view'] = undefined;
var _default = InlineResponse20018Dashboards;
exports["default"] = _default;