"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PlacementStrategy = _interopRequireDefault(require("./PlacementStrategy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatePlacementGroupRequest model module.
 * @module model/CreatePlacementGroupRequest
 * @version 1.0.0
 */
var CreatePlacementGroupRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreatePlacementGroupRequest</code>.
   * @alias module:model/CreatePlacementGroupRequest
   */
  function CreatePlacementGroupRequest() {
    _classCallCheck(this, CreatePlacementGroupRequest);

    CreatePlacementGroupRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatePlacementGroupRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreatePlacementGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePlacementGroupRequest} obj Optional instance to populate.
     * @return {module:model/CreatePlacementGroupRequest} The populated <code>CreatePlacementGroupRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatePlacementGroupRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }

        if (data.hasOwnProperty('PartitionCount')) {
          obj['PartitionCount'] = _ApiClient["default"].convertToType(data['PartitionCount'], 'Number');
        }

        if (data.hasOwnProperty('Strategy')) {
          obj['Strategy'] = _PlacementStrategy["default"].constructFromObject(data['Strategy']);
        }
      }

      return obj;
    }
  }]);

  return CreatePlacementGroupRequest;
}();
/**
 * @member {Boolean} DryRun
 */


CreatePlacementGroupRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} GroupName
 */

CreatePlacementGroupRequest.prototype['GroupName'] = undefined;
/**
 * @member {Number} PartitionCount
 */

CreatePlacementGroupRequest.prototype['PartitionCount'] = undefined;
/**
 * @member {module:model/PlacementStrategy} Strategy
 */

CreatePlacementGroupRequest.prototype['Strategy'] = undefined;
var _default = CreatePlacementGroupRequest;
exports["default"] = _default;