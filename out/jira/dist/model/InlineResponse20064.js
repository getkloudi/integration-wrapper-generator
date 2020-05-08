"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20064Projects = _interopRequireDefault(require("./InlineResponse20064Projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20064 model module.
 * @module model/InlineResponse20064
 * @version 1.3.1
 */
var InlineResponse20064 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20064</code>.
   * 
   * @alias module:model/InlineResponse20064
   * @param projects {Array.<module:model/InlineResponse20064Projects>} 
   */
  function InlineResponse20064(projects) {
    _classCallCheck(this, InlineResponse20064);

    InlineResponse20064.initialize(this, projects);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20064, null, [{
    key: "initialize",
    value: function initialize(obj, projects) {
      obj['projects'] = projects;
    }
    /**
     * Constructs a <code>InlineResponse20064</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20064} obj Optional instance to populate.
     * @return {module:model/InlineResponse20064} The populated <code>InlineResponse20064</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20064();

        if (data.hasOwnProperty('projects')) {
          obj['projects'] = _ApiClient["default"].convertToType(data['projects'], [_InlineResponse20064Projects["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20064;
}();
/**
 * @member {Array.<module:model/InlineResponse20064Projects>} projects
 */


InlineResponse20064.prototype['projects'] = undefined;
var _default = InlineResponse20064;
exports["default"] = _default;