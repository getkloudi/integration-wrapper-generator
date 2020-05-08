"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20022ConfigScopeProjects = _interopRequireDefault(require("./InlineResponse20022ConfigScopeProjects2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20022ConfigScope model module.
 * @module model/InlineResponse20022ConfigScope
 * @version 1.2.0
 */
var InlineResponse20022ConfigScope = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20022ConfigScope</code>.
   * @alias module:model/InlineResponse20022ConfigScope
   * @param global {Object} 
   * @param projects {Array.<Object>} 
   * @param projects2 {Array.<module:model/InlineResponse20022ConfigScopeProjects2>} 
   */
  function InlineResponse20022ConfigScope(global, projects, projects2) {
    _classCallCheck(this, InlineResponse20022ConfigScope);

    InlineResponse20022ConfigScope.initialize(this, global, projects, projects2);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20022ConfigScope, null, [{
    key: "initialize",
    value: function initialize(obj, global, projects, projects2) {
      obj['global'] = global;
      obj['projects'] = projects;
      obj['projects2'] = projects2;
    }
    /**
     * Constructs a <code>InlineResponse20022ConfigScope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20022ConfigScope} obj Optional instance to populate.
     * @return {module:model/InlineResponse20022ConfigScope} The populated <code>InlineResponse20022ConfigScope</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20022ConfigScope();

        if (data.hasOwnProperty('global')) {
          obj['global'] = _ApiClient["default"].convertToType(data['global'], Object);
        }

        if (data.hasOwnProperty('projects')) {
          obj['projects'] = _ApiClient["default"].convertToType(data['projects'], [Object]);
        }

        if (data.hasOwnProperty('projects2')) {
          obj['projects2'] = _ApiClient["default"].convertToType(data['projects2'], [_InlineResponse20022ConfigScopeProjects["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20022ConfigScope;
}();
/**
 * @member {Object} global
 */


InlineResponse20022ConfigScope.prototype['global'] = undefined;
/**
 * @member {Array.<Object>} projects
 */

InlineResponse20022ConfigScope.prototype['projects'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20022ConfigScopeProjects2>} projects2
 */

InlineResponse20022ConfigScope.prototype['projects2'] = undefined;
var _default = InlineResponse20022ConfigScope;
exports["default"] = _default;