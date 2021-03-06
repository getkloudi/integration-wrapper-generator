"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OccurrenceInstance = _interopRequireDefault(require("./OccurrenceInstance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaginatedOccurrenceInstances model module.
 * @module model/PaginatedOccurrenceInstances
 * @version 1.1.0
 */
var PaginatedOccurrenceInstances = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginatedOccurrenceInstances</code>.
   * @alias module:model/PaginatedOccurrenceInstances
   */
  function PaginatedOccurrenceInstances() {
    _classCallCheck(this, PaginatedOccurrenceInstances);

    PaginatedOccurrenceInstances.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginatedOccurrenceInstances, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginatedOccurrenceInstances</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedOccurrenceInstances} obj Optional instance to populate.
     * @return {module:model/PaginatedOccurrenceInstances} The populated <code>PaginatedOccurrenceInstances</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginatedOccurrenceInstances();

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'Number');
        }

        if (data.hasOwnProperty('instances')) {
          obj['instances'] = _ApiClient["default"].convertToType(data['instances'], [_OccurrenceInstance["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaginatedOccurrenceInstances;
}();
/**
 * @member {Number} page
 * @default 1
 */


PaginatedOccurrenceInstances.prototype['page'] = 1;
/**
 * @member {Array.<module:model/OccurrenceInstance>} instances
 */

PaginatedOccurrenceInstances.prototype['instances'] = undefined;
var _default = PaginatedOccurrenceInstances;
exports["default"] = _default;