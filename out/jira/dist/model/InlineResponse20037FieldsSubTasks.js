"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20037FieldsOutwardIssue = _interopRequireDefault(require("./InlineResponse20037FieldsOutwardIssue"));

var _InlineResponse20037FieldsType = _interopRequireDefault(require("./InlineResponse20037FieldsType1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20037FieldsSubTasks model module.
 * @module model/InlineResponse20037FieldsSubTasks
 * @version 1.2.0
 */
var InlineResponse20037FieldsSubTasks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20037FieldsSubTasks</code>.
   * @alias module:model/InlineResponse20037FieldsSubTasks
   * @param id {String} 
   */
  function InlineResponse20037FieldsSubTasks(id) {
    _classCallCheck(this, InlineResponse20037FieldsSubTasks);

    InlineResponse20037FieldsSubTasks.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20037FieldsSubTasks, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>InlineResponse20037FieldsSubTasks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037FieldsSubTasks} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037FieldsSubTasks} The populated <code>InlineResponse20037FieldsSubTasks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20037FieldsSubTasks();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('outwardIssue')) {
          obj['outwardIssue'] = _InlineResponse20037FieldsOutwardIssue["default"].constructFromObject(data['outwardIssue']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _InlineResponse20037FieldsType["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20037FieldsSubTasks;
}();
/**
 * @member {String} id
 */


InlineResponse20037FieldsSubTasks.prototype['id'] = undefined;
/**
 * @member {module:model/InlineResponse20037FieldsOutwardIssue} outwardIssue
 */

InlineResponse20037FieldsSubTasks.prototype['outwardIssue'] = undefined;
/**
 * @member {module:model/InlineResponse20037FieldsType1} type
 */

InlineResponse20037FieldsSubTasks.prototype['type'] = undefined;
var _default = InlineResponse20037FieldsSubTasks;
exports["default"] = _default;