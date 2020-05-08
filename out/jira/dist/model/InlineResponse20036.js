"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20036Projects = _interopRequireDefault(require("./InlineResponse20036Projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20036 model module.
 * @module model/InlineResponse20036
 * @version 1.3.0
 */
var InlineResponse20036 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20036</code>.
   * 
   * @alias module:model/InlineResponse20036
   * @param projects {Array.<module:model/InlineResponse20036Projects>} 
   */
  function InlineResponse20036(projects) {
    _classCallCheck(this, InlineResponse20036);

    InlineResponse20036.initialize(this, projects);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20036, null, [{
    key: "initialize",
    value: function initialize(obj, projects) {
      obj['projects'] = projects;
    }
    /**
     * Constructs a <code>InlineResponse20036</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20036} obj Optional instance to populate.
     * @return {module:model/InlineResponse20036} The populated <code>InlineResponse20036</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20036();

        if (data.hasOwnProperty('projects')) {
          obj['projects'] = _ApiClient["default"].convertToType(data['projects'], [_InlineResponse20036Projects["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20036;
}();
/**
 * @member {Array.<module:model/InlineResponse20036Projects>} projects
 */


InlineResponse20036.prototype['projects'] = undefined;
var _default = InlineResponse20036;
exports["default"] = _default;