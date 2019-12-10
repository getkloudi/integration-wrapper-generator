"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserBasic = _interopRequireDefault(require("./UserBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AwardEmoji model module.
 * @module model/AwardEmoji
 * @version 1.0.0
 */
var AwardEmoji =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AwardEmoji</code>.
   * This feature was introduced in 8.9
   * @alias module:model/AwardEmoji
   */
  function AwardEmoji() {
    _classCallCheck(this, AwardEmoji);

    AwardEmoji.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AwardEmoji, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AwardEmoji</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AwardEmoji} obj Optional instance to populate.
     * @return {module:model/AwardEmoji} The populated <code>AwardEmoji</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AwardEmoji();

        if (data.hasOwnProperty('awardable_id')) {
          obj['awardable_id'] = _ApiClient["default"].convertToType(data['awardable_id'], 'String');
        }

        if (data.hasOwnProperty('awardable_type')) {
          obj['awardable_type'] = _ApiClient["default"].convertToType(data['awardable_type'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _UserBasic["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return AwardEmoji;
}();
/**
 * @member {String} awardable_id
 */


AwardEmoji.prototype['awardable_id'] = undefined;
/**
 * @member {String} awardable_type
 */

AwardEmoji.prototype['awardable_type'] = undefined;
/**
 * @member {String} created_at
 */

AwardEmoji.prototype['created_at'] = undefined;
/**
 * @member {String} id
 */

AwardEmoji.prototype['id'] = undefined;
/**
 * @member {String} name
 */

AwardEmoji.prototype['name'] = undefined;
/**
 * @member {String} updated_at
 */

AwardEmoji.prototype['updated_at'] = undefined;
/**
 * @member {module:model/UserBasic} user
 */

AwardEmoji.prototype['user'] = undefined;
var _default = AwardEmoji;
exports["default"] = _default;