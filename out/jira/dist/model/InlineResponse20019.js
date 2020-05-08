"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20019SharePermissions = _interopRequireDefault(require("./InlineResponse20019SharePermissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20019 model module.
 * @module model/InlineResponse20019
 * @version 1.2.0
 */
var InlineResponse20019 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20019</code>.
   * 
   * @alias module:model/InlineResponse20019
   * @param id {String} 
   * @param isFavourite {Boolean} 
   * @param name {String} 
   * @param popularity {Number} 
   * @param self {String} 
   * @param sharePermissions {Array.<module:model/InlineResponse20019SharePermissions>} 
   * @param view {String} 
   */
  function InlineResponse20019(id, isFavourite, name, popularity, self, sharePermissions, view) {
    _classCallCheck(this, InlineResponse20019);

    InlineResponse20019.initialize(this, id, isFavourite, name, popularity, self, sharePermissions, view);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20019, null, [{
    key: "initialize",
    value: function initialize(obj, id, isFavourite, name, popularity, self, sharePermissions, view) {
      obj['id'] = id;
      obj['isFavourite'] = isFavourite;
      obj['name'] = name;
      obj['popularity'] = popularity;
      obj['self'] = self;
      obj['sharePermissions'] = sharePermissions;
      obj['view'] = view;
    }
    /**
     * Constructs a <code>InlineResponse20019</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20019} obj Optional instance to populate.
     * @return {module:model/InlineResponse20019} The populated <code>InlineResponse20019</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20019();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isFavourite')) {
          obj['isFavourite'] = _ApiClient["default"].convertToType(data['isFavourite'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('popularity')) {
          obj['popularity'] = _ApiClient["default"].convertToType(data['popularity'], 'Number');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('sharePermissions')) {
          obj['sharePermissions'] = _ApiClient["default"].convertToType(data['sharePermissions'], [_InlineResponse20019SharePermissions["default"]]);
        }

        if (data.hasOwnProperty('view')) {
          obj['view'] = _ApiClient["default"].convertToType(data['view'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20019;
}();
/**
 * @member {String} id
 */


InlineResponse20019.prototype['id'] = undefined;
/**
 * @member {Boolean} isFavourite
 */

InlineResponse20019.prototype['isFavourite'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20019.prototype['name'] = undefined;
/**
 * @member {Number} popularity
 */

InlineResponse20019.prototype['popularity'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20019.prototype['self'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20019SharePermissions>} sharePermissions
 */

InlineResponse20019.prototype['sharePermissions'] = undefined;
/**
 * @member {String} view
 */

InlineResponse20019.prototype['view'] = undefined;
var _default = InlineResponse20019;
exports["default"] = _default;