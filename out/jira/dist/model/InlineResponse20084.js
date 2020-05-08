"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterIdPermissionRoleActors = _interopRequireDefault(require("./FilterIdPermissionRoleActors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20084 model module.
 * @module model/InlineResponse20084
 * @version 1.0.0
 */
var InlineResponse20084 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20084</code>.
   * 
   * @alias module:model/InlineResponse20084
   * @param actors {Array.<module:model/FilterIdPermissionRoleActors>} 
   */
  function InlineResponse20084(actors) {
    _classCallCheck(this, InlineResponse20084);

    InlineResponse20084.initialize(this, actors);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20084, null, [{
    key: "initialize",
    value: function initialize(obj, actors) {
      obj['actors'] = actors;
    }
    /**
     * Constructs a <code>InlineResponse20084</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20084} obj Optional instance to populate.
     * @return {module:model/InlineResponse20084} The populated <code>InlineResponse20084</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20084();

        if (data.hasOwnProperty('actors')) {
          obj['actors'] = _ApiClient["default"].convertToType(data['actors'], [_FilterIdPermissionRoleActors["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20084;
}();
/**
 * @member {Array.<module:model/FilterIdPermissionRoleActors>} actors
 */


InlineResponse20084.prototype['actors'] = undefined;
var _default = InlineResponse20084;
exports["default"] = _default;