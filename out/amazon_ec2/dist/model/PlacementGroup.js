"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PlacementGroupState = _interopRequireDefault(require("./PlacementGroupState"));

var _PlacementStrategy = _interopRequireDefault(require("./PlacementStrategy"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PlacementGroup model module.
 * @module model/PlacementGroup
 * @version 1.1.0
 */
var PlacementGroup =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PlacementGroup</code>.
   * Describes a placement group.
   * @alias module:model/PlacementGroup
   */
  function PlacementGroup() {
    _classCallCheck(this, PlacementGroup);

    PlacementGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PlacementGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PlacementGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlacementGroup} obj Optional instance to populate.
     * @return {module:model/PlacementGroup} The populated <code>PlacementGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PlacementGroup();

        if (data.hasOwnProperty('GroupId')) {
          obj['GroupId'] = _ApiClient["default"].convertToType(data['GroupId'], 'String');
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }

        if (data.hasOwnProperty('PartitionCount')) {
          obj['PartitionCount'] = _ApiClient["default"].convertToType(data['PartitionCount'], 'Number');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _PlacementGroupState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Strategy')) {
          obj['Strategy'] = _PlacementStrategy["default"].constructFromObject(data['Strategy']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PlacementGroup;
}();
/**
 * @member {String} GroupId
 */


PlacementGroup.prototype['GroupId'] = undefined;
/**
 * @member {String} GroupName
 */

PlacementGroup.prototype['GroupName'] = undefined;
/**
 * @member {Number} PartitionCount
 */

PlacementGroup.prototype['PartitionCount'] = undefined;
/**
 * @member {module:model/PlacementGroupState} State
 */

PlacementGroup.prototype['State'] = undefined;
/**
 * @member {module:model/PlacementStrategy} Strategy
 */

PlacementGroup.prototype['Strategy'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

PlacementGroup.prototype['Tags'] = undefined;
var _default = PlacementGroup;
exports["default"] = _default;