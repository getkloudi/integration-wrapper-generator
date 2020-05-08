"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20041Fields = _interopRequireDefault(require("./InlineResponse20041Fields"));

var _InlineResponse20045To = _interopRequireDefault(require("./InlineResponse20045To"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20045Transitions model module.
 * @module model/InlineResponse20045Transitions
 * @version 1.3.0
 */
var InlineResponse20045Transitions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20045Transitions</code>.
   * @alias module:model/InlineResponse20045Transitions
   * @param hasScreen {Boolean} 
   * @param id {String} 
   * @param isConditional {Boolean} 
   * @param isGlobal {Boolean} 
   * @param isInitial {Boolean} 
   * @param name {String} 
   */
  function InlineResponse20045Transitions(hasScreen, id, isConditional, isGlobal, isInitial, name) {
    _classCallCheck(this, InlineResponse20045Transitions);

    InlineResponse20045Transitions.initialize(this, hasScreen, id, isConditional, isGlobal, isInitial, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20045Transitions, null, [{
    key: "initialize",
    value: function initialize(obj, hasScreen, id, isConditional, isGlobal, isInitial, name) {
      obj['hasScreen'] = hasScreen;
      obj['id'] = id;
      obj['isConditional'] = isConditional;
      obj['isGlobal'] = isGlobal;
      obj['isInitial'] = isInitial;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>InlineResponse20045Transitions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20045Transitions} obj Optional instance to populate.
     * @return {module:model/InlineResponse20045Transitions} The populated <code>InlineResponse20045Transitions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20045Transitions();

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _InlineResponse20041Fields["default"].constructFromObject(data['fields']);
        }

        if (data.hasOwnProperty('hasScreen')) {
          obj['hasScreen'] = _ApiClient["default"].convertToType(data['hasScreen'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isConditional')) {
          obj['isConditional'] = _ApiClient["default"].convertToType(data['isConditional'], 'Boolean');
        }

        if (data.hasOwnProperty('isGlobal')) {
          obj['isGlobal'] = _ApiClient["default"].convertToType(data['isGlobal'], 'Boolean');
        }

        if (data.hasOwnProperty('isInitial')) {
          obj['isInitial'] = _ApiClient["default"].convertToType(data['isInitial'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _InlineResponse20045To["default"].constructFromObject(data['to']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20045Transitions;
}();
/**
 * @member {module:model/InlineResponse20041Fields} fields
 */


InlineResponse20045Transitions.prototype['fields'] = undefined;
/**
 * @member {Boolean} hasScreen
 */

InlineResponse20045Transitions.prototype['hasScreen'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20045Transitions.prototype['id'] = undefined;
/**
 * @member {Boolean} isConditional
 */

InlineResponse20045Transitions.prototype['isConditional'] = undefined;
/**
 * @member {Boolean} isGlobal
 */

InlineResponse20045Transitions.prototype['isGlobal'] = undefined;
/**
 * @member {Boolean} isInitial
 */

InlineResponse20045Transitions.prototype['isInitial'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20045Transitions.prototype['name'] = undefined;
/**
 * @member {module:model/InlineResponse20045To} to
 */

InlineResponse20045Transitions.prototype['to'] = undefined;
var _default = InlineResponse20045Transitions;
exports["default"] = _default;