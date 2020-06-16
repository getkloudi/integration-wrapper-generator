"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenID = _interopRequireDefault(require("./ScreenID"));

var _WorkflowRules = _interopRequireDefault(require("./WorkflowRules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Transition model module.
 * @module model/Transition
 * @version 1.4.0
 */
var Transition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Transition</code>.
   * Details of a workflow transition.
   * @alias module:model/Transition
   * @param description {String} The description of the transition.
   * @param from {Array.<String>} The statuses the transition can start from.
   * @param id {String} The ID of the transition.
   * @param name {String} The name of the transition.
   * @param to {String} The status the transition goes to.
   * @param type {module:model/Transition.TypeEnum} The type of the transition.
   */
  function Transition(description, from, id, name, to, type) {
    _classCallCheck(this, Transition);

    Transition.initialize(this, description, from, id, name, to, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Transition, null, [{
    key: "initialize",
    value: function initialize(obj, description, from, id, name, to, type) {
      obj['description'] = description;
      obj['from'] = from;
      obj['id'] = id;
      obj['name'] = name;
      obj['to'] = to;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>Transition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transition} obj Optional instance to populate.
     * @return {module:model/Transition} The populated <code>Transition</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Transition();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], ['String']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('rules')) {
          obj['rules'] = _WorkflowRules["default"].constructFromObject(data['rules']);
        }

        if (data.hasOwnProperty('screen')) {
          obj['screen'] = _ScreenID["default"].constructFromObject(data['screen']);
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Transition;
}();
/**
 * The description of the transition.
 * @member {String} description
 */


Transition.prototype['description'] = undefined;
/**
 * The statuses the transition can start from.
 * @member {Array.<String>} from
 */

Transition.prototype['from'] = undefined;
/**
 * The ID of the transition.
 * @member {String} id
 */

Transition.prototype['id'] = undefined;
/**
 * The name of the transition.
 * @member {String} name
 */

Transition.prototype['name'] = undefined;
/**
 * @member {module:model/WorkflowRules} rules
 */

Transition.prototype['rules'] = undefined;
/**
 * @member {module:model/ScreenID} screen
 */

Transition.prototype['screen'] = undefined;
/**
 * The status the transition goes to.
 * @member {String} to
 */

Transition.prototype['to'] = undefined;
/**
 * The type of the transition.
 * @member {module:model/Transition.TypeEnum} type
 */

Transition.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Transition['TypeEnum'] = {
  /**
   * value: "global"
   * @const
   */
  "global": "global",

  /**
   * value: "initial"
   * @const
   */
  "initial": "initial",

  /**
   * value: "directed"
   * @const
   */
  "directed": "directed"
};
var _default = Transition;
exports["default"] = _default;