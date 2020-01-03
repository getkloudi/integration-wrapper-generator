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
 * The LaunchTemplateTagSpecification model module.
 * @module model/LaunchTemplateTagSpecification
 * @version 1.0.0
 */
var LaunchTemplateTagSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateTagSpecification</code>.
   * The tag specification for the launch template.
   * @alias module:model/LaunchTemplateTagSpecification
   */
  function LaunchTemplateTagSpecification() {
    _classCallCheck(this, LaunchTemplateTagSpecification);

    LaunchTemplateTagSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateTagSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateTagSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateTagSpecification} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateTagSpecification} The populated <code>LaunchTemplateTagSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateTagSpecification();

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

  return LaunchTemplateTagSpecification;
}();
/**
 * @member {module:model/ResourceType} ResourceType
 */


LaunchTemplateTagSpecification.prototype['ResourceType'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

LaunchTemplateTagSpecification.prototype['Tags'] = undefined;
var _default = LaunchTemplateTagSpecification;
exports["default"] = _default;