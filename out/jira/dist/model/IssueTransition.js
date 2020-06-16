"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FieldMetadata = _interopRequireDefault(require("./FieldMetadata"));

var _StatusDetails = _interopRequireDefault(require("./StatusDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueTransition model module.
 * @module model/IssueTransition
 * @version 1.4.0
 */
var IssueTransition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTransition</code>.
   * Details of an issue transition.
   * @alias module:model/IssueTransition
   */
  function IssueTransition() {
    _classCallCheck(this, IssueTransition);

    IssueTransition.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTransition, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueTransition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTransition} obj Optional instance to populate.
     * @return {module:model/IssueTransition} The populated <code>IssueTransition</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTransition();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], {
            'String': _FieldMetadata["default"]
          });
        }

        if (data.hasOwnProperty('hasScreen')) {
          obj['hasScreen'] = _ApiClient["default"].convertToType(data['hasScreen'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isAvailable')) {
          obj['isAvailable'] = _ApiClient["default"].convertToType(data['isAvailable'], 'Boolean');
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
          obj['to'] = _ApiClient["default"].convertToType(data['to'], _StatusDetails["default"]);
        }
      }

      return obj;
    }
  }]);

  return IssueTransition;
}();
/**
 * Expand options that include additional transition details in the response.
 * @member {String} expand
 */


IssueTransition.prototype['expand'] = undefined;
/**
 * Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request.
 * @member {Object.<String, module:model/FieldMetadata>} fields
 */

IssueTransition.prototype['fields'] = undefined;
/**
 * Whether there is a screen associated with the issue transition.
 * @member {Boolean} hasScreen
 */

IssueTransition.prototype['hasScreen'] = undefined;
/**
 * The ID of the issue transition. Required when specifying a transition to undertake.
 * @member {String} id
 */

IssueTransition.prototype['id'] = undefined;
/**
 * Whether the transition is available to be performed.
 * @member {Boolean} isAvailable
 */

IssueTransition.prototype['isAvailable'] = undefined;
/**
 * Whether the issue has to meet criteria before the issue transition is applied.
 * @member {Boolean} isConditional
 */

IssueTransition.prototype['isConditional'] = undefined;
/**
 * Whether the issue transition is global, that is, the transition is applied to issues regardless of their status.
 * @member {Boolean} isGlobal
 */

IssueTransition.prototype['isGlobal'] = undefined;
/**
 * Whether this is the initial issue transition for the workflow.
 * @member {Boolean} isInitial
 */

IssueTransition.prototype['isInitial'] = undefined;
/**
 * The name of the issue transition.
 * @member {String} name
 */

IssueTransition.prototype['name'] = undefined;
/**
 * Details of the issue status after the transition.
 * @member {module:model/StatusDetails} to
 */

IssueTransition.prototype['to'] = undefined;
var _default = IssueTransition;
exports["default"] = _default;