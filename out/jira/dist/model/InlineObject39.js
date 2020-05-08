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
 * The InlineObject39 model module.
 * @module model/InlineObject39
 * @version 1.1.0
 */
var InlineObject39 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject39</code>.
   * @alias module:model/InlineObject39
   */
  function InlineObject39() {
    _classCallCheck(this, InlineObject39);

    InlineObject39.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject39, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject39</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject39} obj Optional instance to populate.
     * @return {module:model/InlineObject39} The populated <code>InlineObject39</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject39();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], [Object]);
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], Object);
        }
      }

      return obj;
    }
  }]);

  return InlineObject39;
}();
/**
 * A description for the permission scheme.
 * @member {String} description
 */


InlineObject39.prototype['description'] = undefined;
/**
 * The name of the permission scheme. Must be unique. Required when creating or updating a permission scheme.
 * @member {String} name
 */

InlineObject39.prototype['name'] = undefined;
/**
 * The permission scheme to create or update. See About permission schemes and grants for more information.
 * @member {Array.<Object>} permissions
 */

InlineObject39.prototype['permissions'] = undefined;
/**
 * The scope of the permission scheme
 * @member {Object} scope
 */

InlineObject39.prototype['scope'] = undefined;
var _default = InlineObject39;
exports["default"] = _default;