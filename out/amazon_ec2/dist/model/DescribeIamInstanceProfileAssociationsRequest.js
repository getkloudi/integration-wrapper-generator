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
 * The DescribeIamInstanceProfileAssociationsRequest model module.
 * @module model/DescribeIamInstanceProfileAssociationsRequest
 * @version 1.0.0
 */
var DescribeIamInstanceProfileAssociationsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeIamInstanceProfileAssociationsRequest</code>.
   * @alias module:model/DescribeIamInstanceProfileAssociationsRequest
   */
  function DescribeIamInstanceProfileAssociationsRequest() {
    _classCallCheck(this, DescribeIamInstanceProfileAssociationsRequest);

    DescribeIamInstanceProfileAssociationsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeIamInstanceProfileAssociationsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeIamInstanceProfileAssociationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeIamInstanceProfileAssociationsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeIamInstanceProfileAssociationsRequest} The populated <code>DescribeIamInstanceProfileAssociationsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeIamInstanceProfileAssociationsRequest();

        if (data.hasOwnProperty('AssociationIds')) {
          obj['AssociationIds'] = _ApiClient["default"].convertToType(data['AssociationIds'], ['String']);
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeIamInstanceProfileAssociationsRequest;
}();
/**
 * @member {Array.<String>} AssociationIds
 */


DescribeIamInstanceProfileAssociationsRequest.prototype['AssociationIds'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeIamInstanceProfileAssociationsRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeIamInstanceProfileAssociationsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeIamInstanceProfileAssociationsRequest.prototype['NextToken'] = undefined;
var _default = DescribeIamInstanceProfileAssociationsRequest;
exports["default"] = _default;