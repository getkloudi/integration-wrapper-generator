"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicProjectDetails = _interopRequireDefault(require("./BasicProjectDetails"));

var _UserBasic = _interopRequireDefault(require("./UserBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Todo model module.
 * @module model/Todo
 * @version 1.1.0
 */
var Todo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Todo</code>.
   * Mark a todo as done
   * @alias module:model/Todo
   */
  function Todo() {
    _classCallCheck(this, Todo);

    Todo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Todo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Todo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Todo} obj Optional instance to populate.
     * @return {module:model/Todo} The populated <code>Todo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Todo();

        if (data.hasOwnProperty('action_name')) {
          obj['action_name'] = _ApiClient["default"].convertToType(data['action_name'], 'String');
        }

        if (data.hasOwnProperty('author')) {
          obj['author'] = _UserBasic["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('project')) {
          obj['project'] = _BasicProjectDetails["default"].constructFromObject(data['project']);
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('target')) {
          obj['target'] = _ApiClient["default"].convertToType(data['target'], 'String');
        }

        if (data.hasOwnProperty('target_type')) {
          obj['target_type'] = _ApiClient["default"].convertToType(data['target_type'], 'String');
        }

        if (data.hasOwnProperty('target_url')) {
          obj['target_url'] = _ApiClient["default"].convertToType(data['target_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Todo;
}();
/**
 * @member {String} action_name
 */


Todo.prototype['action_name'] = undefined;
/**
 * @member {module:model/UserBasic} author
 */

Todo.prototype['author'] = undefined;
/**
 * @member {String} body
 */

Todo.prototype['body'] = undefined;
/**
 * @member {String} created_at
 */

Todo.prototype['created_at'] = undefined;
/**
 * @member {String} id
 */

Todo.prototype['id'] = undefined;
/**
 * @member {module:model/BasicProjectDetails} project
 */

Todo.prototype['project'] = undefined;
/**
 * @member {String} state
 */

Todo.prototype['state'] = undefined;
/**
 * @member {String} target
 */

Todo.prototype['target'] = undefined;
/**
 * @member {String} target_type
 */

Todo.prototype['target_type'] = undefined;
/**
 * @member {String} target_url
 */

Todo.prototype['target_url'] = undefined;
var _default = Todo;
exports["default"] = _default;