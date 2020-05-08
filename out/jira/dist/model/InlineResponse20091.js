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
 * The InlineResponse20091 model module.
 * @module model/InlineResponse20091
 * @version 1.2.0
 */
var InlineResponse20091 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20091</code>.
   * 
   * @alias module:model/InlineResponse20091
   * @param description {String} 
   * @param elapsedRuntime {Number} 
   * @param finished {Number} 
   * @param id {String} 
   * @param lastUpdate {Number} 
   * @param progress {Number} 
   * @param result {String} 
   * @param self {String} 
   * @param started {Number} 
   * @param status {String} 
   * @param submitted {Number} 
   * @param submittedBy {Number} 
   */
  function InlineResponse20091(description, elapsedRuntime, finished, id, lastUpdate, progress, result, self, started, status, submitted, submittedBy) {
    _classCallCheck(this, InlineResponse20091);

    InlineResponse20091.initialize(this, description, elapsedRuntime, finished, id, lastUpdate, progress, result, self, started, status, submitted, submittedBy);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20091, null, [{
    key: "initialize",
    value: function initialize(obj, description, elapsedRuntime, finished, id, lastUpdate, progress, result, self, started, status, submitted, submittedBy) {
      obj['description'] = description;
      obj['elapsedRuntime'] = elapsedRuntime;
      obj['finished'] = finished;
      obj['id'] = id;
      obj['lastUpdate'] = lastUpdate;
      obj['progress'] = progress;
      obj['result'] = result;
      obj['self'] = self;
      obj['started'] = started;
      obj['status'] = status;
      obj['submitted'] = submitted;
      obj['submittedBy'] = submittedBy;
    }
    /**
     * Constructs a <code>InlineResponse20091</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20091} obj Optional instance to populate.
     * @return {module:model/InlineResponse20091} The populated <code>InlineResponse20091</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20091();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('elapsedRuntime')) {
          obj['elapsedRuntime'] = _ApiClient["default"].convertToType(data['elapsedRuntime'], 'Number');
        }

        if (data.hasOwnProperty('finished')) {
          obj['finished'] = _ApiClient["default"].convertToType(data['finished'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('lastUpdate')) {
          obj['lastUpdate'] = _ApiClient["default"].convertToType(data['lastUpdate'], 'Number');
        }

        if (data.hasOwnProperty('progress')) {
          obj['progress'] = _ApiClient["default"].convertToType(data['progress'], 'Number');
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('started')) {
          obj['started'] = _ApiClient["default"].convertToType(data['started'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('submitted')) {
          obj['submitted'] = _ApiClient["default"].convertToType(data['submitted'], 'Number');
        }

        if (data.hasOwnProperty('submittedBy')) {
          obj['submittedBy'] = _ApiClient["default"].convertToType(data['submittedBy'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20091;
}();
/**
 * @member {String} description
 */


InlineResponse20091.prototype['description'] = undefined;
/**
 * @member {Number} elapsedRuntime
 */

InlineResponse20091.prototype['elapsedRuntime'] = undefined;
/**
 * @member {Number} finished
 */

InlineResponse20091.prototype['finished'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20091.prototype['id'] = undefined;
/**
 * @member {Number} lastUpdate
 */

InlineResponse20091.prototype['lastUpdate'] = undefined;
/**
 * @member {Number} progress
 */

InlineResponse20091.prototype['progress'] = undefined;
/**
 * @member {String} result
 */

InlineResponse20091.prototype['result'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20091.prototype['self'] = undefined;
/**
 * @member {Number} started
 */

InlineResponse20091.prototype['started'] = undefined;
/**
 * @member {String} status
 */

InlineResponse20091.prototype['status'] = undefined;
/**
 * @member {Number} submitted
 */

InlineResponse20091.prototype['submitted'] = undefined;
/**
 * @member {Number} submittedBy
 */

InlineResponse20091.prototype['submittedBy'] = undefined;
var _default = InlineResponse20091;
exports["default"] = _default;