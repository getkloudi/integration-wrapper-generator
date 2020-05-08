"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse303Result = _interopRequireDefault(require("./InlineResponse303Result"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse303 model module.
 * @module model/InlineResponse303
 * @version 1.3.1
 */
var InlineResponse303 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse303</code>.
   * 
   * @alias module:model/InlineResponse303
   * @param description {String} 
   * @param elapsedRuntime {Number} 
   * @param id {String} 
   * @param result {module:model/InlineResponse303Result} 
   * @param self {String} 
   * @param status {String} 
   */
  function InlineResponse303(description, elapsedRuntime, id, result, self, status) {
    _classCallCheck(this, InlineResponse303);

    InlineResponse303.initialize(this, description, elapsedRuntime, id, result, self, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse303, null, [{
    key: "initialize",
    value: function initialize(obj, description, elapsedRuntime, id, result, self, status) {
      obj['description'] = description;
      obj['elapsedRuntime'] = elapsedRuntime;
      obj['id'] = id;
      obj['result'] = result;
      obj['self'] = self;
      obj['status'] = status;
    }
    /**
     * Constructs a <code>InlineResponse303</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse303} obj Optional instance to populate.
     * @return {module:model/InlineResponse303} The populated <code>InlineResponse303</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse303();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('elapsedRuntime')) {
          obj['elapsedRuntime'] = _ApiClient["default"].convertToType(data['elapsedRuntime'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _InlineResponse303Result["default"].constructFromObject(data['result']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse303;
}();
/**
 * @member {String} description
 */


InlineResponse303.prototype['description'] = undefined;
/**
 * @member {Number} elapsedRuntime
 */

InlineResponse303.prototype['elapsedRuntime'] = undefined;
/**
 * @member {String} id
 */

InlineResponse303.prototype['id'] = undefined;
/**
 * @member {module:model/InlineResponse303Result} result
 */

InlineResponse303.prototype['result'] = undefined;
/**
 * @member {String} self
 */

InlineResponse303.prototype['self'] = undefined;
/**
 * @member {String} status
 */

InlineResponse303.prototype['status'] = undefined;
var _default = InlineResponse303;
exports["default"] = _default;