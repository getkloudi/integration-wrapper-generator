"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Branch = _interopRequireDefault(require("./Branch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaginatedBranches model module.
 * @module model/PaginatedBranches
 * @version 1.2.0
 */
var PaginatedBranches = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginatedBranches</code>.
   * A paginated list of branches.
   * @alias module:model/PaginatedBranches
   */
  function PaginatedBranches() {
    _classCallCheck(this, PaginatedBranches);

    PaginatedBranches.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginatedBranches, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginatedBranches</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedBranches} obj Optional instance to populate.
     * @return {module:model/PaginatedBranches} The populated <code>PaginatedBranches</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginatedBranches();

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'Number');
        }

        if (data.hasOwnProperty('pagelen')) {
          obj['pagelen'] = _ApiClient["default"].convertToType(data['pagelen'], 'Number');
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _ApiClient["default"].convertToType(data['previous'], 'String');
        }

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [_Branch["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaginatedBranches;
}();
/**
 * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
 * @member {Number} size
 */


PaginatedBranches.prototype['size'] = undefined;
/**
 * Page number of the current results. This is an optional element that is not provided in all responses.
 * @member {Number} page
 */

PaginatedBranches.prototype['page'] = undefined;
/**
 * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
 * @member {Number} pagelen
 */

PaginatedBranches.prototype['pagelen'] = undefined;
/**
 * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
 * @member {String} next
 */

PaginatedBranches.prototype['next'] = undefined;
/**
 * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
 * @member {String} previous
 */

PaginatedBranches.prototype['previous'] = undefined;
/**
 * @member {Array.<module:model/Branch>} values
 */

PaginatedBranches.prototype['values'] = undefined;
var _default = PaginatedBranches;
exports["default"] = _default;