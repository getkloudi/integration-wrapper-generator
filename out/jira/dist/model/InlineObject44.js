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
 * The InlineObject44 model module.
 * @module model/InlineObject44
 * @version 1.3.1
 */
var InlineObject44 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject44</code>.
   * @alias module:model/InlineObject44
   */
  function InlineObject44() {
    _classCallCheck(this, InlineObject44);

    InlineObject44.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject44, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject44</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject44} obj Optional instance to populate.
     * @return {module:model/InlineObject44} The populated <code>InlineObject44</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject44();

        if (data.hasOwnProperty('categorisedActors')) {
          obj['categorisedActors'] = _ApiClient["default"].convertToType(data['categorisedActors'], Object);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineObject44;
}();
/**
 * The actors to add to the project role for the project. Provide the group name or account ID. User key may be provided instead of account ID when not in GDPR-strict mode, however this is deprecated behavior. Add groups using atlassian-group-role-actor. Add users using atlassian-user-role-actor.
 * @member {Object} categorisedActors
 */


InlineObject44.prototype['categorisedActors'] = undefined;
/**
 * The ID of the project role. Use Get all project roles to get a list of project role IDs.
 * @member {Number} id
 */

InlineObject44.prototype['id'] = undefined;
var _default = InlineObject44;
exports["default"] = _default;