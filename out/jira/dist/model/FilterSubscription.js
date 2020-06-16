"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupName = _interopRequireDefault(require("./GroupName"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FilterSubscription model module.
 * @module model/FilterSubscription
 * @version 1.4.0
 */
var FilterSubscription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilterSubscription</code>.
   * Details of a user or group subscribing to a filter.
   * @alias module:model/FilterSubscription
   */
  function FilterSubscription() {
    _classCallCheck(this, FilterSubscription);

    FilterSubscription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilterSubscription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FilterSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterSubscription} obj Optional instance to populate.
     * @return {module:model/FilterSubscription} The populated <code>FilterSubscription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilterSubscription();

        if (data.hasOwnProperty('group')) {
          obj['group'] = _ApiClient["default"].convertToType(data['group'], _GroupName["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _User["default"]);
        }
      }

      return obj;
    }
  }]);

  return FilterSubscription;
}();
/**
 * The group subscribing to filter.
 * @member {module:model/GroupName} group
 */


FilterSubscription.prototype['group'] = undefined;
/**
 * The ID of the filter subscription.
 * @member {Number} id
 */

FilterSubscription.prototype['id'] = undefined;
/**
 * The user subscribing to filter.
 * @member {module:model/User} user
 */

FilterSubscription.prototype['user'] = undefined;
var _default = FilterSubscription;
exports["default"] = _default;