"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReservedInstancesListing = _interopRequireDefault(require("./ReservedInstancesListing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateReservedInstancesListingResult model module.
 * @module model/CreateReservedInstancesListingResult
 * @version 1.1.0
 */
var CreateReservedInstancesListingResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateReservedInstancesListingResult</code>.
   * Contains the output of CreateReservedInstancesListing.
   * @alias module:model/CreateReservedInstancesListingResult
   */
  function CreateReservedInstancesListingResult() {
    _classCallCheck(this, CreateReservedInstancesListingResult);

    CreateReservedInstancesListingResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateReservedInstancesListingResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateReservedInstancesListingResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateReservedInstancesListingResult} obj Optional instance to populate.
     * @return {module:model/CreateReservedInstancesListingResult} The populated <code>CreateReservedInstancesListingResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateReservedInstancesListingResult();

        if (data.hasOwnProperty('ReservedInstancesListings')) {
          obj['ReservedInstancesListings'] = _ApiClient["default"].convertToType(data['ReservedInstancesListings'], [_ReservedInstancesListing["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreateReservedInstancesListingResult;
}();
/**
 * @member {Array.<module:model/ReservedInstancesListing>} ReservedInstancesListings
 */


CreateReservedInstancesListingResult.prototype['ReservedInstancesListings'] = undefined;
var _default = CreateReservedInstancesListingResult;
exports["default"] = _default;