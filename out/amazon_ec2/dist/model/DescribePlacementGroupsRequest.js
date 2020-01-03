"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribePlacementGroupsRequest model module.
 * @module model/DescribePlacementGroupsRequest
 * @version 1.0.0
 */
var DescribePlacementGroupsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribePlacementGroupsRequest</code>.
   * @alias module:model/DescribePlacementGroupsRequest
   */
  function DescribePlacementGroupsRequest() {
    _classCallCheck(this, DescribePlacementGroupsRequest);

    DescribePlacementGroupsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribePlacementGroupsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribePlacementGroupsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribePlacementGroupsRequest} obj Optional instance to populate.
     * @return {module:model/DescribePlacementGroupsRequest} The populated <code>DescribePlacementGroupsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribePlacementGroupsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('GroupIds')) {
          obj['GroupIds'] = _ApiClient["default"].convertToType(data['GroupIds'], ['String']);
        }

        if (data.hasOwnProperty('GroupNames')) {
          obj['GroupNames'] = _ApiClient["default"].convertToType(data['GroupNames'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribePlacementGroupsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribePlacementGroupsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribePlacementGroupsRequest.prototype['Filters'] = undefined;
/**
 * @member {Array.<String>} GroupIds
 */

DescribePlacementGroupsRequest.prototype['GroupIds'] = undefined;
/**
 * @member {Array.<String>} GroupNames
 */

DescribePlacementGroupsRequest.prototype['GroupNames'] = undefined;
var _default = DescribePlacementGroupsRequest;
exports["default"] = _default;