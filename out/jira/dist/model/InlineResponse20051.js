"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20050Type = _interopRequireDefault(require("./InlineResponse20050Type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20051 model module.
 * @module model/InlineResponse20051
 * @version 1.2.0
 */
var InlineResponse20051 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20051</code>.
   * 
   * @alias module:model/InlineResponse20051
   * @param issueLinkTypes {Array.<module:model/InlineResponse20050Type>} 
   */
  function InlineResponse20051(issueLinkTypes) {
    _classCallCheck(this, InlineResponse20051);

    InlineResponse20051.initialize(this, issueLinkTypes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20051, null, [{
    key: "initialize",
    value: function initialize(obj, issueLinkTypes) {
      obj['issueLinkTypes'] = issueLinkTypes;
    }
    /**
     * Constructs a <code>InlineResponse20051</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20051} obj Optional instance to populate.
     * @return {module:model/InlineResponse20051} The populated <code>InlineResponse20051</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20051();

        if (data.hasOwnProperty('issueLinkTypes')) {
          obj['issueLinkTypes'] = _ApiClient["default"].convertToType(data['issueLinkTypes'], [_InlineResponse20050Type["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20051;
}();
/**
 * @member {Array.<module:model/InlineResponse20050Type>} issueLinkTypes
 */


InlineResponse20051.prototype['issueLinkTypes'] = undefined;
var _default = InlineResponse20051;
exports["default"] = _default;