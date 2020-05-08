"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20022PropertiesLeader = _interopRequireDefault(require("./InlineResponse20022PropertiesLeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20022Properties model module.
 * @module model/InlineResponse20022Properties
 * @version 1.3.0
 */
var InlineResponse20022Properties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20022Properties</code>.
   * @alias module:model/InlineResponse20022Properties
   * @param description {String} 
   * @param founded {String} 
   * @param leader {module:model/InlineResponse20022PropertiesLeader} 
   * @param members {Number} 
   */
  function InlineResponse20022Properties(description, founded, leader, members) {
    _classCallCheck(this, InlineResponse20022Properties);

    InlineResponse20022Properties.initialize(this, description, founded, leader, members);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20022Properties, null, [{
    key: "initialize",
    value: function initialize(obj, description, founded, leader, members) {
      obj['description'] = description;
      obj['founded'] = founded;
      obj['leader'] = leader;
      obj['members'] = members;
    }
    /**
     * Constructs a <code>InlineResponse20022Properties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20022Properties} obj Optional instance to populate.
     * @return {module:model/InlineResponse20022Properties} The populated <code>InlineResponse20022Properties</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20022Properties();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('founded')) {
          obj['founded'] = _ApiClient["default"].convertToType(data['founded'], 'String');
        }

        if (data.hasOwnProperty('leader')) {
          obj['leader'] = _InlineResponse20022PropertiesLeader["default"].constructFromObject(data['leader']);
        }

        if (data.hasOwnProperty('members')) {
          obj['members'] = _ApiClient["default"].convertToType(data['members'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20022Properties;
}();
/**
 * @member {String} description
 */


InlineResponse20022Properties.prototype['description'] = undefined;
/**
 * @member {String} founded
 */

InlineResponse20022Properties.prototype['founded'] = undefined;
/**
 * @member {module:model/InlineResponse20022PropertiesLeader} leader
 */

InlineResponse20022Properties.prototype['leader'] = undefined;
/**
 * @member {Number} members
 */

InlineResponse20022Properties.prototype['members'] = undefined;
var _default = InlineResponse20022Properties;
exports["default"] = _default;