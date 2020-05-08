"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20065PermissionSchemes = _interopRequireDefault(require("./InlineResponse20065PermissionSchemes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20065 model module.
 * @module model/InlineResponse20065
 * @version 1.2.0
 */
var InlineResponse20065 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20065</code>.
   * 
   * @alias module:model/InlineResponse20065
   * @param permissionSchemes {Array.<module:model/InlineResponse20065PermissionSchemes>} 
   */
  function InlineResponse20065(permissionSchemes) {
    _classCallCheck(this, InlineResponse20065);

    InlineResponse20065.initialize(this, permissionSchemes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20065, null, [{
    key: "initialize",
    value: function initialize(obj, permissionSchemes) {
      obj['permissionSchemes'] = permissionSchemes;
    }
    /**
     * Constructs a <code>InlineResponse20065</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20065} obj Optional instance to populate.
     * @return {module:model/InlineResponse20065} The populated <code>InlineResponse20065</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20065();

        if (data.hasOwnProperty('permissionSchemes')) {
          obj['permissionSchemes'] = _ApiClient["default"].convertToType(data['permissionSchemes'], [_InlineResponse20065PermissionSchemes["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20065;
}();
/**
 * @member {Array.<module:model/InlineResponse20065PermissionSchemes>} permissionSchemes
 */


InlineResponse20065.prototype['permissionSchemes'] = undefined;
var _default = InlineResponse20065;
exports["default"] = _default;