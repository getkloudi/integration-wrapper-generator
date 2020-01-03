"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResourceType = _interopRequireDefault(require("./ResourceType"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TagSpecification model module.
 * @module model/TagSpecification
 * @version 1.0.0
 */
var TagSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TagSpecification</code>.
   * The tags to apply to a resource when the resource is being created.
   * @alias module:model/TagSpecification
   */
  function TagSpecification() {
    _classCallCheck(this, TagSpecification);

    TagSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TagSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TagSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagSpecification} obj Optional instance to populate.
     * @return {module:model/TagSpecification} The populated <code>TagSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagSpecification();

        if (data.hasOwnProperty('ResourceType')) {
          obj['ResourceType'] = _ResourceType["default"].constructFromObject(data['ResourceType']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TagSpecification;
}();
/**
 * @member {module:model/ResourceType} ResourceType
 */


TagSpecification.prototype['ResourceType'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

TagSpecification.prototype['Tags'] = undefined;
var _default = TagSpecification;
exports["default"] = _default;