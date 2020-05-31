"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ItemInVersionAllOf model module.
 * @module model/ItemInVersionAllOf
 * @version 1.1.0
 */
var ItemInVersionAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemInVersionAllOf</code>.
   * @alias module:model/ItemInVersionAllOf
   */
  function ItemInVersionAllOf() {
    _classCallCheck(this, ItemInVersionAllOf);

    ItemInVersionAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemInVersionAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemInVersionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemInVersionAllOf} obj Optional instance to populate.
     * @return {module:model/ItemInVersionAllOf} The populated <code>ItemInVersionAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemInVersionAllOf();

        if (data.hasOwnProperty('first_in_version_occurrence_id')) {
          obj['first_in_version_occurrence_id'] = _ApiClient["default"].convertToType(data['first_in_version_occurrence_id'], 'Number');
        }

        if (data.hasOwnProperty('first_in_version_occurrence_timestamp')) {
          obj['first_in_version_occurrence_timestamp'] = _ApiClient["default"].convertToType(data['first_in_version_occurrence_timestamp'], 'Number');
        }

        if (data.hasOwnProperty('last_in_version_occurrence_id')) {
          obj['last_in_version_occurrence_id'] = _ApiClient["default"].convertToType(data['last_in_version_occurrence_id'], 'Number');
        }

        if (data.hasOwnProperty('last_in_version_occurrence_timestamp')) {
          obj['last_in_version_occurrence_timestamp'] = _ApiClient["default"].convertToType(data['last_in_version_occurrence_timestamp'], 'Number');
        }

        if (data.hasOwnProperty('occurrences_in_version')) {
          obj['occurrences_in_version'] = _ApiClient["default"].convertToType(data['occurrences_in_version'], 'Number');
        }

        if (data.hasOwnProperty('people_in_version')) {
          obj['people_in_version'] = _ApiClient["default"].convertToType(data['people_in_version'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ItemInVersionAllOf;
}();
/**
 * First occurrence ID of the item on the version
 * @member {Number} first_in_version_occurrence_id
 */


ItemInVersionAllOf.prototype['first_in_version_occurrence_id'] = undefined;
/**
 * First occurrence timestamp of the item on the version
 * @member {Number} first_in_version_occurrence_timestamp
 */

ItemInVersionAllOf.prototype['first_in_version_occurrence_timestamp'] = undefined;
/**
 * Last received occurrence ID of the item on the version
 * @member {Number} last_in_version_occurrence_id
 */

ItemInVersionAllOf.prototype['last_in_version_occurrence_id'] = undefined;
/**
 * Last received occurrence timestamp on the version
 * @member {Number} last_in_version_occurrence_timestamp
 */

ItemInVersionAllOf.prototype['last_in_version_occurrence_timestamp'] = undefined;
/**
 * Total number of item occurrences on this version
 * @member {Number} occurrences_in_version
 */

ItemInVersionAllOf.prototype['occurrences_in_version'] = undefined;
/**
 * Number of affected people by this item on this version
 * @member {Number} people_in_version
 */

ItemInVersionAllOf.prototype['people_in_version'] = undefined;
var _default = ItemInVersionAllOf;
exports["default"] = _default;