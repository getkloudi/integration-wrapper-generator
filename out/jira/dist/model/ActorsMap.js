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
 * The ActorsMap model module.
 * @module model/ActorsMap
 * @version 1.4.0
 */
var ActorsMap = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActorsMap</code>.
   * @alias module:model/ActorsMap
   */
  function ActorsMap() {
    _classCallCheck(this, ActorsMap);

    ActorsMap.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActorsMap, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActorsMap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActorsMap} obj Optional instance to populate.
     * @return {module:model/ActorsMap} The populated <code>ActorsMap</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActorsMap();

        if (data.hasOwnProperty('group')) {
          obj['group'] = _ApiClient["default"].convertToType(data['group'], ['String']);
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ActorsMap;
}();
/**
 * The name of the group to add.
 * @member {Array.<String>} group
 */


ActorsMap.prototype['group'] = undefined;
/**
 * The user account ID of the user to add.
 * @member {Array.<String>} user
 */

ActorsMap.prototype['user'] = undefined;
var _default = ActorsMap;
exports["default"] = _default;