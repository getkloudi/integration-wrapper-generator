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
 * The InlineResponse20022ConfigScopeProjects2 model module.
 * @module model/InlineResponse20022ConfigScopeProjects2
 * @version 1.1.0
 */
var InlineResponse20022ConfigScopeProjects2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20022ConfigScopeProjects2</code>.
   * @alias module:model/InlineResponse20022ConfigScopeProjects2
   * @param id {Number} 
   */
  function InlineResponse20022ConfigScopeProjects2(id) {
    _classCallCheck(this, InlineResponse20022ConfigScopeProjects2);

    InlineResponse20022ConfigScopeProjects2.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20022ConfigScopeProjects2, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>InlineResponse20022ConfigScopeProjects2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20022ConfigScopeProjects2} obj Optional instance to populate.
     * @return {module:model/InlineResponse20022ConfigScopeProjects2} The populated <code>InlineResponse20022ConfigScopeProjects2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20022ConfigScopeProjects2();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], [Object]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20022ConfigScopeProjects2;
}();
/**
 * @member {Array.<Object>} attributes
 */


InlineResponse20022ConfigScopeProjects2.prototype['attributes'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20022ConfigScopeProjects2.prototype['id'] = undefined;
var _default = InlineResponse20022ConfigScopeProjects2;
exports["default"] = _default;