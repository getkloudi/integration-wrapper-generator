"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterIdPermissionProjectProjectCategory = _interopRequireDefault(require("./FilterIdPermissionProjectProjectCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20080 model module.
 * @module model/InlineResponse20080
 * @version 1.0.0
 */
var InlineResponse20080 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20080</code>.
   * 
   * @alias module:model/InlineResponse20080
   * @param levels {Array.<module:model/FilterIdPermissionProjectProjectCategory>} 
   */
  function InlineResponse20080(levels) {
    _classCallCheck(this, InlineResponse20080);

    InlineResponse20080.initialize(this, levels);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20080, null, [{
    key: "initialize",
    value: function initialize(obj, levels) {
      obj['levels'] = levels;
    }
    /**
     * Constructs a <code>InlineResponse20080</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20080} obj Optional instance to populate.
     * @return {module:model/InlineResponse20080} The populated <code>InlineResponse20080</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20080();

        if (data.hasOwnProperty('levels')) {
          obj['levels'] = _ApiClient["default"].convertToType(data['levels'], [_FilterIdPermissionProjectProjectCategory["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20080;
}();
/**
 * @member {Array.<module:model/FilterIdPermissionProjectProjectCategory>} levels
 */


InlineResponse20080.prototype['levels'] = undefined;
var _default = InlineResponse20080;
exports["default"] = _default;