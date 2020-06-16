"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueLinkType = _interopRequireDefault(require("./IssueLinkType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueLinkTypes model module.
 * @module model/IssueLinkTypes
 * @version 1.4.0
 */
var IssueLinkTypes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueLinkTypes</code>.
   * A list of issue link type beans.
   * @alias module:model/IssueLinkTypes
   */
  function IssueLinkTypes() {
    _classCallCheck(this, IssueLinkTypes);

    IssueLinkTypes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueLinkTypes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueLinkTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueLinkTypes} obj Optional instance to populate.
     * @return {module:model/IssueLinkTypes} The populated <code>IssueLinkTypes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueLinkTypes();

        if (data.hasOwnProperty('issueLinkTypes')) {
          obj['issueLinkTypes'] = _ApiClient["default"].convertToType(data['issueLinkTypes'], [_IssueLinkType["default"]]);
        }
      }

      return obj;
    }
  }]);

  return IssueLinkTypes;
}();
/**
 * The issue link type bean.
 * @member {Array.<module:model/IssueLinkType>} issueLinkTypes
 */


IssueLinkTypes.prototype['issueLinkTypes'] = undefined;
var _default = IssueLinkTypes;
exports["default"] = _default;