"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2018Holder = _interopRequireDefault(require("./InlineResponse2018Holder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2019 model module.
 * @module model/InlineResponse2019
 * @version 1.0.0
 */
var InlineResponse2019 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2019</code>.
   * 
   * @alias module:model/InlineResponse2019
   * @param holder {module:model/InlineResponse2018Holder} 
   * @param id {Number} 
   * @param permission {String} 
   * @param self {String} 
   */
  function InlineResponse2019(holder, id, permission, self) {
    _classCallCheck(this, InlineResponse2019);

    InlineResponse2019.initialize(this, holder, id, permission, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2019, null, [{
    key: "initialize",
    value: function initialize(obj, holder, id, permission, self) {
      obj['holder'] = holder;
      obj['id'] = id;
      obj['permission'] = permission;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse2019</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2019} obj Optional instance to populate.
     * @return {module:model/InlineResponse2019} The populated <code>InlineResponse2019</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2019();

        if (data.hasOwnProperty('holder')) {
          obj['holder'] = _InlineResponse2018Holder["default"].constructFromObject(data['holder']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2019;
}();
/**
 * @member {module:model/InlineResponse2018Holder} holder
 */


InlineResponse2019.prototype['holder'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse2019.prototype['id'] = undefined;
/**
 * @member {String} permission
 */

InlineResponse2019.prototype['permission'] = undefined;
/**
 * @member {String} self
 */

InlineResponse2019.prototype['self'] = undefined;
var _default = InlineResponse2019;
exports["default"] = _default;