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
 * The Api1ItemRequest1 model module.
 * @module model/Api1ItemRequest1
 * @version 1.1.0
 */
var Api1ItemRequest1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api1ItemRequest1</code>.
   * @alias module:model/Api1ItemRequest1
   */
  function Api1ItemRequest1() {
    _classCallCheck(this, Api1ItemRequest1);

    Api1ItemRequest1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api1ItemRequest1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Api1ItemRequest1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1ItemRequest1} obj Optional instance to populate.
     * @return {module:model/Api1ItemRequest1} The populated <code>Api1ItemRequest1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api1ItemRequest1();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('resolved_in_version')) {
          obj['resolved_in_version'] = _ApiClient["default"].convertToType(data['resolved_in_version'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('level')) {
          obj['level'] = _ApiClient["default"].convertToType(data['level'], 'String');
        }

        if (data.hasOwnProperty('assigned_user_id')) {
          obj['assigned_user_id'] = _ApiClient["default"].convertToType(data['assigned_user_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Api1ItemRequest1;
}();
/**
 * If present, the new status. Valid values: `active`, `resolved`, `muted`.
 * @member {String} status
 */


Api1ItemRequest1.prototype['status'] = undefined;
/**
 * If not empty, a string up to 40 characters describing the version that the item was resolved in. Only used if `status` is set to `resolved`.
 * @member {String} resolved_in_version
 */

Api1ItemRequest1.prototype['resolved_in_version'] = undefined;
/**
 * If present, the new title. Should be a string with length 1 to 255.
 * @member {String} title
 */

Api1ItemRequest1.prototype['title'] = undefined;
/**
 * If present, the new level. Valid values: `critical`, `error`, `warning`, `info`, `debug`
 * @member {String} level
 */

Api1ItemRequest1.prototype['level'] = undefined;
/**
 * If present, the new assigned user ID. Valid values are null or any user ID with access to this item.
 * @member {Number} assigned_user_id
 */

Api1ItemRequest1.prototype['assigned_user_id'] = undefined;
var _default = Api1ItemRequest1;
exports["default"] = _default;