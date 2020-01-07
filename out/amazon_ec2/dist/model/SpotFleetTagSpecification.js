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
 * The SpotFleetTagSpecification model module.
 * @module model/SpotFleetTagSpecification
 * @version 1.1.0
 */
var SpotFleetTagSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SpotFleetTagSpecification</code>.
   * The tags for a Spot Fleet resource.
   * @alias module:model/SpotFleetTagSpecification
   */
  function SpotFleetTagSpecification() {
    _classCallCheck(this, SpotFleetTagSpecification);

    SpotFleetTagSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpotFleetTagSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SpotFleetTagSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotFleetTagSpecification} obj Optional instance to populate.
     * @return {module:model/SpotFleetTagSpecification} The populated <code>SpotFleetTagSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpotFleetTagSpecification();

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

  return SpotFleetTagSpecification;
}();
/**
 * @member {module:model/ResourceType} ResourceType
 */


SpotFleetTagSpecification.prototype['ResourceType'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

SpotFleetTagSpecification.prototype['Tags'] = undefined;
var _default = SpotFleetTagSpecification;
exports["default"] = _default;