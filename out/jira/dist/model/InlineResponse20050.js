"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20050InwardIssue = _interopRequireDefault(require("./InlineResponse20050InwardIssue"));

var _InlineResponse20050OutwardIssue = _interopRequireDefault(require("./InlineResponse20050OutwardIssue"));

var _InlineResponse20050Type = _interopRequireDefault(require("./InlineResponse20050Type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20050 model module.
 * @module model/InlineResponse20050
 * @version 1.2.0
 */
var InlineResponse20050 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20050</code>.
   * 
   * @alias module:model/InlineResponse20050
   * @param id {String} 
   * @param inwardIssue {module:model/InlineResponse20050InwardIssue} 
   * @param outwardIssue {module:model/InlineResponse20050OutwardIssue} 
   * @param type {module:model/InlineResponse20050Type} 
   */
  function InlineResponse20050(id, inwardIssue, outwardIssue, type) {
    _classCallCheck(this, InlineResponse20050);

    InlineResponse20050.initialize(this, id, inwardIssue, outwardIssue, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20050, null, [{
    key: "initialize",
    value: function initialize(obj, id, inwardIssue, outwardIssue, type) {
      obj['id'] = id;
      obj['inwardIssue'] = inwardIssue;
      obj['outwardIssue'] = outwardIssue;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineResponse20050</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050} The populated <code>InlineResponse20050</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20050();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('inwardIssue')) {
          obj['inwardIssue'] = _InlineResponse20050InwardIssue["default"].constructFromObject(data['inwardIssue']);
        }

        if (data.hasOwnProperty('outwardIssue')) {
          obj['outwardIssue'] = _InlineResponse20050OutwardIssue["default"].constructFromObject(data['outwardIssue']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _InlineResponse20050Type["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20050;
}();
/**
 * @member {String} id
 */


InlineResponse20050.prototype['id'] = undefined;
/**
 * @member {module:model/InlineResponse20050InwardIssue} inwardIssue
 */

InlineResponse20050.prototype['inwardIssue'] = undefined;
/**
 * @member {module:model/InlineResponse20050OutwardIssue} outwardIssue
 */

InlineResponse20050.prototype['outwardIssue'] = undefined;
/**
 * @member {module:model/InlineResponse20050Type} type
 */

InlineResponse20050.prototype['type'] = undefined;
var _default = InlineResponse20050;
exports["default"] = _default;