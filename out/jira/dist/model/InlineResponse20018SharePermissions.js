"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20018Group = _interopRequireDefault(require("./InlineResponse20018Group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20018SharePermissions model module.
 * @module model/InlineResponse20018SharePermissions
 * @version 1.0.0
 */
var InlineResponse20018SharePermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20018SharePermissions</code>.
   * @alias module:model/InlineResponse20018SharePermissions
   * @param id {Number} 
   * @param type {String} 
   */
  function InlineResponse20018SharePermissions(id, type) {
    _classCallCheck(this, InlineResponse20018SharePermissions);

    InlineResponse20018SharePermissions.initialize(this, id, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20018SharePermissions, null, [{
    key: "initialize",
    value: function initialize(obj, id, type) {
      obj['id'] = id;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineResponse20018SharePermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20018SharePermissions} obj Optional instance to populate.
     * @return {module:model/InlineResponse20018SharePermissions} The populated <code>InlineResponse20018SharePermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20018SharePermissions();

        if (data.hasOwnProperty('group')) {
          obj['group'] = _InlineResponse20018Group["default"].constructFromObject(data['group']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20018SharePermissions;
}();
/**
 * @member {module:model/InlineResponse20018Group} group
 */


InlineResponse20018SharePermissions.prototype['group'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20018SharePermissions.prototype['id'] = undefined;
/**
 * @member {String} type
 */

InlineResponse20018SharePermissions.prototype['type'] = undefined;
var _default = InlineResponse20018SharePermissions;
exports["default"] = _default;