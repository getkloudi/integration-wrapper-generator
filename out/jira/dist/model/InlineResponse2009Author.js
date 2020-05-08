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
 * The InlineResponse2009Author model module.
 * @module model/InlineResponse2009Author
 * @version 1.2.0
 */
var InlineResponse2009Author = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2009Author</code>.
   * @alias module:model/InlineResponse2009Author
   * @param active {Boolean} 
   * @param displayName {String} 
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse2009Author(active, displayName, name, self) {
    _classCallCheck(this, InlineResponse2009Author);

    InlineResponse2009Author.initialize(this, active, displayName, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2009Author, null, [{
    key: "initialize",
    value: function initialize(obj, active, displayName, name, self) {
      obj['active'] = active;
      obj['displayName'] = displayName;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse2009Author</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009Author} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009Author} The populated <code>InlineResponse2009Author</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2009Author();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

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

  return InlineResponse2009Author;
}();
/**
 * @member {Boolean} active
 */


InlineResponse2009Author.prototype['active'] = undefined;
/**
 * @member {String} displayName
 */

InlineResponse2009Author.prototype['displayName'] = undefined;
/**
 * @member {String} name
 */

InlineResponse2009Author.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse2009Author.prototype['self'] = undefined;
var _default = InlineResponse2009Author;
exports["default"] = _default;