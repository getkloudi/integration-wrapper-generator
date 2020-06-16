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
 * The GroupLabel model module.
 * @module model/GroupLabel
 * @version 1.4.0
 */
var GroupLabel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GroupLabel</code>.
   * A group label.
   * @alias module:model/GroupLabel
   */
  function GroupLabel() {
    _classCallCheck(this, GroupLabel);

    GroupLabel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GroupLabel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GroupLabel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupLabel} obj Optional instance to populate.
     * @return {module:model/GroupLabel} The populated <code>GroupLabel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GroupLabel();

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GroupLabel;
}();
/**
 * The group label name.
 * @member {String} text
 */


GroupLabel.prototype['text'] = undefined;
/**
 * The title of the group label.
 * @member {String} title
 */

GroupLabel.prototype['title'] = undefined;
/**
 * The type of the group label.
 * @member {module:model/GroupLabel.TypeEnum} type
 */

GroupLabel.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

GroupLabel['TypeEnum'] = {
  /**
   * value: "ADMIN"
   * @const
   */
  "ADMIN": "ADMIN",

  /**
   * value: "SINGLE"
   * @const
   */
  "SINGLE": "SINGLE",

  /**
   * value: "MULTIPLE"
   * @const
   */
  "MULTIPLE": "MULTIPLE"
};
var _default = GroupLabel;
exports["default"] = _default;