"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResourceType = _interopRequireDefault(require("./ResourceType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TagDescription model module.
 * @module model/TagDescription
 * @version 1.0.0
 */
var TagDescription =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TagDescription</code>.
   * Describes a tag.
   * @alias module:model/TagDescription
   */
  function TagDescription() {
    _classCallCheck(this, TagDescription);

    TagDescription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TagDescription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TagDescription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagDescription} obj Optional instance to populate.
     * @return {module:model/TagDescription} The populated <code>TagDescription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagDescription();

        if (data.hasOwnProperty('Key')) {
          obj['Key'] = _ApiClient["default"].convertToType(data['Key'], 'String');
        }

        if (data.hasOwnProperty('ResourceId')) {
          obj['ResourceId'] = _ApiClient["default"].convertToType(data['ResourceId'], 'String');
        }

        if (data.hasOwnProperty('ResourceType')) {
          obj['ResourceType'] = _ResourceType["default"].constructFromObject(data['ResourceType']);
        }

        if (data.hasOwnProperty('Value')) {
          obj['Value'] = _ApiClient["default"].convertToType(data['Value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TagDescription;
}();
/**
 * @member {String} Key
 */


TagDescription.prototype['Key'] = undefined;
/**
 * @member {String} ResourceId
 */

TagDescription.prototype['ResourceId'] = undefined;
/**
 * @member {module:model/ResourceType} ResourceType
 */

TagDescription.prototype['ResourceType'] = undefined;
/**
 * @member {String} Value
 */

TagDescription.prototype['Value'] = undefined;
var _default = TagDescription;
exports["default"] = _default;