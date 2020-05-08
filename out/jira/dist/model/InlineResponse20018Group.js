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
 * The InlineResponse20018Group model module.
 * @module model/InlineResponse20018Group
 * @version 1.2.0
 */
var InlineResponse20018Group = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20018Group</code>.
   * @alias module:model/InlineResponse20018Group
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20018Group(name, self) {
    _classCallCheck(this, InlineResponse20018Group);

    InlineResponse20018Group.initialize(this, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20018Group, null, [{
    key: "initialize",
    value: function initialize(obj, name, self) {
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20018Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20018Group} obj Optional instance to populate.
     * @return {module:model/InlineResponse20018Group} The populated <code>InlineResponse20018Group</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20018Group();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20018Group;
}();
/**
 * @member {String} name
 */


InlineResponse20018Group.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20018Group.prototype['self'] = undefined;
var _default = InlineResponse20018Group;
exports["default"] = _default;