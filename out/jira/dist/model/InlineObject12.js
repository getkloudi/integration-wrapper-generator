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
 * The InlineObject12 model module.
 * @module model/InlineObject12
 * @version 1.1.0
 */
var InlineObject12 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject12</code>.
   * @alias module:model/InlineObject12
   */
  function InlineObject12() {
    _classCallCheck(this, InlineObject12);

    InlineObject12.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject12, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject12</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject12} obj Optional instance to populate.
     * @return {module:model/InlineObject12} The populated <code>InlineObject12</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject12();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], Object);
        }

        if (data.hasOwnProperty('sharePermissions')) {
          obj['sharePermissions'] = _ApiClient["default"].convertToType(data['sharePermissions'], [Object]);
        }

        if (data.hasOwnProperty('sharedUsers')) {
          obj['sharedUsers'] = _ApiClient["default"].convertToType(data['sharedUsers'], Object);
        }

        if (data.hasOwnProperty('subscriptions')) {
          obj['subscriptions'] = _ApiClient["default"].convertToType(data['subscriptions'], Object);
        }
      }

      return obj;
    }
  }]);

  return InlineObject12;
}();
/**
 * A description of the filter (e.g., This filter returns open bugs for the Example project).
 * @member {String} description
 */


InlineObject12.prototype['description'] = undefined;
/**
 * The name of the filter (e.g., Open bugs for Example project). Must be unique.
 * @member {String} name
 */

InlineObject12.prototype['name'] = undefined;
/**
 * A user.
 * @member {Object} owner
 */

InlineObject12.prototype['owner'] = undefined;
/**
 * The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter.
 * @member {Array.<Object>} sharePermissions
 */

InlineObject12.prototype['sharePermissions'] = undefined;
/**
 * @member {Object} sharedUsers
 */

InlineObject12.prototype['sharedUsers'] = undefined;
/**
 * @member {Object} subscriptions
 */

InlineObject12.prototype['subscriptions'] = undefined;
var _default = InlineObject12;
exports["default"] = _default;